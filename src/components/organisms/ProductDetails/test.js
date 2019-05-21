import React from 'react';
import { shallow, configure } from 'enzyme';
import ProductDetails from '.';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders ProductDetails with props", () => {
  shallow(<ProductDetails product={{}}/>);
});

it("renders ProductDetails not props", () => {
  shallow(<ProductDetails/>);
});