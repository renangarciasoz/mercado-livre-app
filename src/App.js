
import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themeDefault } from "./themes/default";

import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.pallete.lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <>
            <GlobalStyle />
            <Routes />
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
