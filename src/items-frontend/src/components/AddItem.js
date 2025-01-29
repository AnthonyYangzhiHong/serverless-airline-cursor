import React, { useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { createItem } from '../graphql/mutations';

const client = generateClient();

const AddItem = ({ onItemAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const input = {
        ...formData,
        price: parseFloat(formData.price)
      };

      const response = await client.graphql({
        query: createItem,
        variables: { input },
        authMode: 'userPool'
      });

      if (response.data.createItem) {
        setFormData({
          name: '',
          description: '',
          price: '',
          category: ''
        });
        if (onItemAdded) {
          onItemAdded(response.data.createItem);
        }
      }
    } catch (err) {
      console.error('Error creating item:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-item-form">
      <h3>Add New Item</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default AddItem; 