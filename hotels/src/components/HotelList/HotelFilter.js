import React from "react";
import { Divider, Checkbox, Radio, Row } from "antd";

const HotelFilter = props => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  return (
    <div>
      <Row>
        <h2>Sort by Rating</h2>
        <Radio.Group onChange={props.onSortChange} value={props.sortBy}>
          <Radio style={radioStyle} value="asc">
            Ascending
          </Radio>
          <Radio style={radioStyle} value="desc">
            Descending
          </Radio>
        </Radio.Group>
      </Row>
      <h2>Filter by</h2>
      <Row>
        <Divider orientation="right">Facilities</Divider>
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
