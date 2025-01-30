import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const client = generateClient();

const AIRPORTS = [
  { code: 'JFK', name: 'New York - John F. Kennedy' },
  { code: 'LAX', name: 'Los Angeles International' },
  { code: 'ORD', name: 'Chicago O\'Hare' },
  { code: 'DFW', name: 'Dallas/Fort Worth' },
  { code: 'DEN', name: 'Denver International' },
  { code: 'SFO', name: 'San Francisco International' },
  { code: 'SEA', name: 'Seattle-Tacoma' },
  { code: 'MIA', name: 'Miami International' },
  { code: 'BOS', name: 'Boston Logan' },
  { code: 'ATL', name: 'Atlanta Hartsfield-Jackson' }
];

const FlightSearch = () => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFlights = async () => {
    if (!departureAirport || !arrivalAirport || !departureDate) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const formattedDate = dayjs(departureDate).format('YYYY-MM-DD');
      
      const query = `
        query GetFlights(
          $departureAirportCode: AirportCode!
          $arrivalAirportCode: AirportCode!
          $departureDate: String!
        ) {
          listFlights(filter: {
            departureAirportCode: { eq: $departureAirportCode }
            arrivalAirportCode: { eq: $arrivalAirportCode }
            departureDate: { eq: $departureDate }
          }) {
            items {
              departureAirportCode
              arrivalAirportCode
              departureDate
              arrivalDate
              airline
              ticketPrice
              seatCapacity
            }
          }
        }
      `;

      const variables = {
        departureAirportCode: departureAirport,
        arrivalAirportCode: arrivalAirport,
        departureDate: formattedDate
      };

      const response = await client.graphql({
        query,
        variables
      });

      setFlights(response.data.listFlights.items);
    } catch (error) {
      console.error('Error searching flights:', error);
      alert('Error searching flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return dayjs(dateString).format('YYYY-MM-DD');
  };

  const getAirportName = (code) => {
    const airport = AIRPORTS.find(a => a.code === code);
    return airport ? airport.name : code;
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Flight Search
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Departure Airport</InputLabel>
              <Select
                value={departureAirport}
                label="Departure Airport"
                onChange={(e) => setDepartureAirport(e.target.value)}
              >
                {AIRPORTS.map((airport) => (
                  <MenuItem key={airport.code} value={airport.code}>
                    {airport.code} - {airport.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Arrival Airport</InputLabel>
              <Select
                value={arrivalAirport}
                label="Arrival Airport"
                onChange={(e) => setArrivalAirport(e.target.value)}
              >
                {AIRPORTS.map((airport) => (
                  <MenuItem 
                    key={airport.code} 
                    value={airport.code}
                    disabled={airport.code === departureAirport}
                  >
                    {airport.code} - {airport.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure Date"
                value={departureDate}
                onChange={(newValue) => setDepartureDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={searchFlights}
          disabled={loading}
          fullWidth
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </Button>

        {flights.length > 0 && (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Airline</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Departure</TableCell>
                  <TableCell>Arrival</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Seats</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((flight, index) => (
                  <TableRow key={index}>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{getAirportName(flight.departureAirportCode)}</TableCell>
                    <TableCell>{getAirportName(flight.arrivalAirportCode)}</TableCell>
                    <TableCell>{formatDate(flight.departureDate)}</TableCell>
                    <TableCell>{formatDate(flight.arrivalDate)}</TableCell>
                    <TableCell>${flight.ticketPrice}</TableCell>
                    <TableCell>{flight.seatCapacity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {flights.length === 0 && !loading && (
          <Typography sx={{ mt: 2, textAlign: 'center', color: 'text.secondary' }}>
            No flights found. Try different search criteria.
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default FlightSearch; 