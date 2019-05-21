import React from 'react';
import { shallow, configure } from 'enzyme';
import Products from '.';
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() });

it("renders Products with props", () => {
  shallow(
    <Provider store={store}>
      <Products products={[]}/>
    </Provider>
  );
});

it("renders Products not props", () => {
  shallow(
    <Provider store={store}>
      <Products />
    </Provider>
  );
});