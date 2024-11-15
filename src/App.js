import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Grid from './components/Grid';
import { appStore } from './utils/State_Management/appStore';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <SearchBar />
        <Grid />
      </div>
    </Provider>
  );
}

export default App;
