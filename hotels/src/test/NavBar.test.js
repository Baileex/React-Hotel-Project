/**
 * @file Test suite for the Calculator component.
 */

import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import NavBar from "../components/NavBar/NavBar"

it("renders correctly", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});