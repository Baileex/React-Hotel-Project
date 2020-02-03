import React from "react";
import { mount, shallow } from "enzyme";
import HotelList from "../components/HotelList/HotelList";
import Hotel from "../components/Hotel/Hotel";
import HotelFilter from "../components/HotelList/HotelFilter";
import { wrap } from "module";

describe("HotelList Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HotelList />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders six <Hotel/> components", () => {
    const wrapper = shallow(<HotelList />);
    expect(wrapper.find(Hotel)).toHaveLength(6);
  });
  it("renders the <HotelFilter/> component", () => {
    const wrapper = shallow(<HotelList />);
    expect(wrapper.find(HotelFilter)).toHaveLength(1);
  });
});

describe("HotelFilter Component", () => {
  it("sorts hotels by rating ", () => {
    const wrapper = mount(<HotelList />);
    let filter = wrapper.find(HotelFilter);
    let ascbutton = filter.find(".ant-radio-input").at(0);
    ascbutton.simulate("change");
    expect(wrapper.state().sortBy).toEqual("asc");
    expect(
      wrapper
        .find(Hotel)
        .at(0)
        .find("h3")
        .text()
    ).toEqual("Name : hotelfour");

    let descbutton = filter.find(".ant-radio-input").at(1);
    descbutton.simulate("change");
    expect(wrapper.state().sortBy).toEqual("desc");
    expect(
      wrapper
        .find(Hotel)
        .at(0)
        .find("h3")
        .text()
    ).toEqual("Name : hotelone");
  });
});
