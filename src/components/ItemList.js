import { API } from 'aws-amplify';
import { itemsByName } from '../graphql/queries';
import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchItems = async (searchText = '') => {
    try {
      const result = await API.graphql({
        query: itemsByName,
        variables: {
          name: searchText,
          limit: 20
        }
      });

      setItems(result.data.itemsByName.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />
      
      <div>
        {items.map(item => (
          <div key={item.id}>
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