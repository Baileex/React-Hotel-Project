import React, { Component } from 'react';
import Hotel from "../Hotel/Hotel"
import {hotelData} from "../../data/hotelData"

class HotelList extends Component 
{
  state = {
    hotels: hotelData
  }
  render() {
    const {hotels} = this.state;
    return (
      <section className="hotel-list">
        {hotels.map((hotel, index )=> {
          return (
           <Hotel key={index} hotel={hotel}/> 
          )
        })}
        
      </section>
    );
  }
}

export default HotelList;