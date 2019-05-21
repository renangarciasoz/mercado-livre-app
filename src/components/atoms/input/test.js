import React from 'react';
import { shallow, configure } from 'enzyme';
import Input from '.';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders input type text", () => {
  shallow(<Input type="text"/>);
});

it("renders input default", () => {
  shallow(<Input/>);
});