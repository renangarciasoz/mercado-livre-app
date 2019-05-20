import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themeDefault } from "./themes/default";

import store from "./store";
import Routes from "./routes";
import { Provider } from "react-redux";
import Header from "./components/organisms/header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.pallete.lightGrey};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    
    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDefault}>
        <>
          <GlobalStyle />
          <Header />
          <Routes />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
