import React from "react";
import { Checkbox, Radio, Col } from "antd";

const HotelFilter = props => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <div className="filter-bar">
      <Col>
        <h2>Sort by Rating</h2>
        <Radio.Group onChange={props.onSortChange} value={props.sortBy}>
          <Radio style={radioStyle} value="asc">
            Ascending
          </Radio>
          <Radio style={radioStyle} value="desc">
            Descending
          </Radio>
        </Radio.Group>
      </Col>
      <div className="filter-col">
        <h2>Filter by:</h2>
        <Col>
          <Checkbox.Group
            options={props.amenitiesOptions}
            value={props.checkedList}
            onChange={props.onGroupChange}
          />
        </Col>
      </div>
    </div>
  );
};

export default HotelFilter;
