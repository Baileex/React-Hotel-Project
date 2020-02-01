import React, { Component } from "react";
import Hotel from "../Hotel/Hotel";
import { hotelData } from "../../data/hotelData";
import HotelFilter from "./HotelFilter";
import { filterHotels } from "../../utils/utils";

const amenitiesOptions = [
  { label: "Car Park", value: "car park" },
  { label: "Breakfast included", value: "Breakfast included" },
  { label: "Gym", value: "gym" },
  { label: "Free airport shuttle", value: "free airport shuttle" },
  { label: "Pool", value: "pool" },
  { label: "Pet friendly", value: "pet friendly" },
  { label: "Free WiFi", value: "free wifi" }
];

class HotelList extends Component {
  state = {
    hotels: hotelData,
    checkedList: [],
    sortBy: 1,
    checkAll: false
  };

  handleInfo = () => {
    this.setState(currentState => {
      return { showInfo: !currentState.showInfo };
    });
  };

  onSortChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      sortBy: e.target.value
    });
  };

  onCheck = e => {
    const values = amenitiesOptions.map(record => record.value);
    this.setState({
      checkAll: e.target.checked,
      checkedList: e.target.checked ? values : []
    });
  };

  onGroupChange = checkedList => {
    console.log(checkedList)
    this.setState({
      checkedList,
      checkAll: checkedList.length === amenitiesOptions.length
    });
  };

  render() {
    const { hotels, checkedList } = this.state;
    let filteredHotels = [...hotels]
    if (checkedList.length > 0) {
      filteredHotels = filterHotels(hotels, checkedList);
    }
    return (
      <React.Fragment>
        <HotelFilter
          onSortChange={this.onSortChange}
          onGroupChange={this.onGroupChange}
          onCheck={this.onCheck}
          amenitiesOptions={amenitiesOptions}
          checkAll={this.state.checkAll}
          checkedList={this.state.checkedList}
        />
        <section className="hotel-list">
          {filteredHotels.map((hotel, index) => {
            return <Hotel key={index} hotel={hotel} />;
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default HotelList;
