import React, { Component } from 'react';
import Hotel from "../Hotel/Hotel"

class HotelList extends Component {
  render() {
    return (
      <section className="hotel-list">
        <Hotel/>
      </section>
    );
  }
}

export default HotelList;