import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import Navbar from './components/navbar';
import io from 'socket.io-client';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';

//Socket is hard coded to my backend server on 4005
//TODO need to have a variable here to keep these two connected
export const socket = io('http://localhost:4005');

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

injectGlobal`
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

* {
 box-sizing: inherit;  
}
`;

const OuterContainer = styled.div`
width: 100vw;
height: 100vh;
background: ${props => props.theme.background}
`;
const theme = {
  main: 'palevioletred',
  font: 'Helvetica, Arial, sans-serif',
  background: '#FFE5ED',
  color: '#990032',
};

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <OuterContainer>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </OuterContainer>
      </ThemeProvider>
    );
  }
}
