import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HotelList from './components/HotelList/HotelList';

function App() {
  return (
  <React.Fragment>
  <NavBar/> 
  <HotelList/> 
  </React.Fragment>
  );
}

export default App;
