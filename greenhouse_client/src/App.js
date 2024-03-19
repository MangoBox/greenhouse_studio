import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Navbar from './Navbar';
import { Typography } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h2'>Greenhouse Controller</Typography>
        <br></br>
        <Navbar/>

      </header>
    </div>
  );
}


export default App; 
