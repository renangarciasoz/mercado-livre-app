import React from 'react';
import { shallow, configure } from 'enzyme';
import Image from '.';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders image with src", () => {
  shallow(<Image src="http://imagem.com/i.png"/>);
});

it("renders image default", () => {
  shallow(<Image />);
});