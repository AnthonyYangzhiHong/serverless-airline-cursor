import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import ItemList from './components/ItemList';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Store</h1>
      </header>
      <main>
        <ItemList />
      </main>
    </div>
  );
}

export default App; 