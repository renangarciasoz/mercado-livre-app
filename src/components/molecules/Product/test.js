import React from 'react';
import { shallow, configure } from 'enzyme';
import Product from '.';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders Product with props", () => {
  shallow(<Product product={{}}/>);
});

it("renders Product not props", () => {
  shallow(<Product/>);
});