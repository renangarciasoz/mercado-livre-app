import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from '.';
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() });

it("renders Header default", () => {
  shallow(
  <Provider store={store}>
    <Header />
  </Provider>
  );
});