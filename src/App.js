import React, { Component } from 'react';
import Navbar from './components/navbar';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';

import io from 'socket.io-client';
//Socket is hard coded to my backend server on 4005
//TODO need to have a variable here to keep these two connected
export const socket = io('http://localhost:4005');

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
  font-family: ${props => props.theme.font};
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.background}
`;

const theme = {
  main: '#0D2C54',
  font: 'Helvetica, Arial, sans-serif',
  background: 'whitesmoke',
  color: '#0D2C54',
};

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <OuterContainer>
          <Navbar />
        </OuterContainer>
      </ThemeProvider>
    );
  }
}
