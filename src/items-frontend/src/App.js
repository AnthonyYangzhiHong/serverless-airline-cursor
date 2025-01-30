import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import awsconfig from './aws-exports';
import ItemList from './components/ItemList';
import FlightSearch from './components/FlightSearch';
import Login from './components/Login';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Router>
        <div className="App">
          <Container>
            <Login onLoginSuccess={handleLoginSuccess} />
          </Container>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/items">
                Items
              </Button>
              <Button color="inherit" component={Link} to="/flights">
                Flights
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route 
              path="/items" 
              element={<ItemList />} 
            />
            <Route 
              path="/flights" 
              element={<FlightSearch />} 
            />
            <Route 
              path="/" 
              element={<Navigate to="/items" replace />} 
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App; 