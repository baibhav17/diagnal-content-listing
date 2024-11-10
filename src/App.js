import './App.css';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { setSearchTerm } from './utils/State_Management/slices/dataSlice';
import Grid from './components/Grid';
import { appStore } from './utils/State_Management/appStore';

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

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      style={{
        padding: '10px',
        margin: '20px',
        width: '80%',
        fontSize: '1.2rem',
      }}
    />
  );
};

export default App;
