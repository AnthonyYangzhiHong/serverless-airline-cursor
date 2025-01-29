import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import awsconfig from './aws-exports';
import ItemList from './components/ItemList';
import Login from './components/Login';
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Store</h1>
      </header>
      <main>
        {isAuthenticated ? (
          <ItemList />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </main>
    </div>
  );
}

export default App; 