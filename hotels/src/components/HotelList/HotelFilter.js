import React from "react";
import { Col, Divider, Checkbox, Radio, Row } from "antd";

const HotelFilter = props => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <div className="filter-bar">
      <Row>
        <h2>Sort by</h2>
      </Row>
      <Divider />
      <h2>Filter by</h2>
      <Row>
        <Divider orientation="left">Amenities</Divider>
        <Checkbox.Group
          options={props.amenitiesOptions}
          value={props.checkedList}
          onChange={props.onGroupChange}
        />
        <Checkbox onChange={props.onCheck} checked={props.checkAll}>
          Check all
        </Checkbox>
      </Row>
    </div>
  );
};

export default HotelFilter;
