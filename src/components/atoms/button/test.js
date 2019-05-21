import React from "react";
import { shallow, configure } from "enzyme";
import Button from ".";
import Adapter from "enzyme-adapter-react-16";

const wrap = (props = {}) => shallow(<Button {...props} />).dive();

configure({ adapter: new Adapter() });
it("renders with disable props", () => {
  wrap({ disabled: true });
});

it("renders props when passed in", () => {
  const wrapper = wrap({ type: "submit" });
  expect(wrapper.find({ type: "submit" })).toHaveLength(1);
});