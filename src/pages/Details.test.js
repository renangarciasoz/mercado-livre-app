import React from 'react';
import { shallow, configure } from 'enzyme';
import Details from './Details';
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() });

it("renders Details", () => {
  shallow(
    <Provider store={store}>
      <Details />
    </Provider>
  );
});