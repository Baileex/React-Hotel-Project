import React from "react";
import { Divider, Checkbox, Select, Row } from "antd";

const HotelFilter = props => {
  return (
    <div className="filter-bar">
      <Row>
        <h2>Sort by Rating</h2>
        <Select className="options" name="order" onChange={props.sortByRating}>
          <Select.Option value="desc">Descending</Select.Option>
          <Select.Option value="asc">Ascending</Select.Option>
        </Select>
      </Row>
      <Divider />
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
