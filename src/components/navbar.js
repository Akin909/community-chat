import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Chat from '../containers/Chat';
import Login from './login';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`
  color: tomato;
  text-decoration: none;
  display: block;

  &:hover {
    text-decoration: underline
  }
`;

const NavLinkList = styled.ul`
  list-style-type: none;
  display:flex;
  justify-content: center
  background: pink;
  margin:0;
  font-family: Helvetica, Arial, sans-serif;
`;
const NavListItem = styled.li`
  margin:1rem;
`;
//TODO Make the chat route private and navigate there on login
const Navbar = () => (
  <Router>
    <div>
      <NavLinkList>
        <NavListItem>Community Chat</NavListItem>
        <NavListItem><StyledNavLink to="/">Home</StyledNavLink></NavListItem>
        <NavListItem>
          <StyledNavLink to="/chat">Chat</StyledNavLink>
        </NavListItem>
      </NavLinkList>

      <Route path="/chat" component={Chat} />
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

export default Navbar;
