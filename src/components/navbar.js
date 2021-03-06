import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Link,
  Route,
} from 'react-router-dom';

import Login from './login';
import Home from './home';
import { auth } from './authentication';
import Chat from '../components/Chat';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`
color: ${props => props.theme.background};
margin: 0.4rem;
  text-decoration: none;
  display: block;

  &:hover {
    text-decoration: underline
  }
`;

const NavLinkList = styled.ul`
color: ${props => props.theme.background};
  list-style-type: none;
  display:flex;
  justify-content: space-between;
  background:${props => props.theme.color};
  margin:0;
  font-family: Helvetica, Arial, sans-serif;
`;
const NavListItem = styled.li`
  font-size: ${props => (props.title ? '1.6rem' : '1.2rem')};
  text-shadow: ${props => (props.title ? '1px 1px 0px grey, 1.5px 1.5px 0px grey' : '')}
  margin:1rem;
  display: flex;
  flex-direction: row;
`;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />)}
  />
);

const AuthButton = withRouter(
  ({ history }) =>
    (auth.isAuthenticated
      ? <p>
          Welcome! <button
            onClick={() => {
              auth.signout(() => history.push('/'));
            }}
          >
            Sign out
          </button>
        </p>
      : <p>You are not logged in.</p>)
);

//TODO Make the chat route private and navigate there on login
const Navbar = () => (
  <Router>
    <div>
      <NavLinkList>
        <NavListItem title>Community Chat</NavListItem>
        <NavListItem>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/chat">Chat</StyledNavLink>
        </NavListItem>
      </NavLinkList>
      <AuthButton />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Navbar;
