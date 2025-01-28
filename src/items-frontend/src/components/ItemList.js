import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { listItems } from '../graphql/queries';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

// Configure Amplify with your aws-exports
Amplify.configure(awsconfig);

// Create API client with API key authorization
const client = generateClient({
  authMode: 'apiKey',
  apiKey: awsconfig.aws_appsync_apiKey
});

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await client.graphql({
        query: listItems,
        authMode: 'apiKey'
      });
      
      if (response.data && response.data.listItems) {
        setItems(response.data.listItems.items || []);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching items:', err);
      setError(err.message);
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="item-list">
      <h2>Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList; 