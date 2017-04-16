import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Chat from '../containers/Chat';
import App from '../App';
import Login from './login';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`
  color: tomato;
  text-decoration: none;
  display: block;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline
  }
`;

const Navbar = () => (
  <Router>
    <div>
      <ul>
        <li><StyledNavLink to="/">Home</StyledNavLink></li>
        <li><StyledNavLink to="/chat">Chat</StyledNavLink></li>
      </ul>

      <Route path="/chat" component={Chat} />
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

export default Navbar;
