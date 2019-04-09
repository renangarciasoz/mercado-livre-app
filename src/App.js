
import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themeDefault } from "./themes/default";

import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <div>
            <GlobalStyle />
            <Routes />
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
