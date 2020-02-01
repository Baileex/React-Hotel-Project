import React, { Component } from "react";
import Hotel from "../Hotel/Hotel";
import { hotelData } from "../../data/hotelData";

class HotelList extends Component {
  state = {
    hotels: hotelData
  };

  handleInfo = () => {
    this.setState(currentState => {
      return { showInfo: !currentState.showInfo };
    });
  };
  render() {
    const { hotels } = this.state;
    return (
      <section className="hotel-list">
        {hotels.length > 0 &&
          hotels.map((hotel, index) => {
            return <Hotel key={index} hotel={hotel} />;
          })}
        <h1>No Hotels</h1>
      </section>
    );
  }
}

export default HotelList;
