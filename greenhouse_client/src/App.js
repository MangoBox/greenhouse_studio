import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GREENHOUSE CLIENT DEV - LIAM IS THE BEST!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="outlined">Hello world</Button>

      </header>
    </div>
  );
}


export default App;
