import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import Hotel from "../components/Hotel/Hotel";

const hotel = {
  name: "",
  img: "",
  starRating: 5,
  facilities: []
};

describe("Hotel Component", () => {
  it("renders hotel data correctly", () => {
    const wrapper = shallow(<Hotel hotel={hotel} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it("check name of hotel is being passed through props", () => {
    const HotelComponent = mount(<Hotel hotel={hotel} />)
    expect(HotelComponent.find('h3').hasClass("hotel-name")).toEqual(true);
    expect(HotelComponent.find('h3').text()).toEqual(`Name : ${hotel.name}`);
  });
  it("button click should show/hide facilities on click", () => {
    const wrapper = mount(<Hotel hotel={hotel} />);
    let facilities = wrapper.find("span");
    facilities.simulate("click");
    expect(wrapper.state().showInfo).toEqual(true);
    expect(wrapper.find(".facility")).toHaveLength(1);

    facilities.simulate("click");
    expect(wrapper.state().showInfo).toEqual(false);
  });
});
