import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Link,
  Route,
} from 'react-router-dom';
import Chat from '../components/Chat';
import Login from './login';
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
const auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/auth',
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
            {' '}Sign out{' '}
          </button>
        </p>
      : <p>You are not logged in.</p>)
);
class Auth extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
  }

  login() {
    auth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
      });
    });
  }

  render() {
    console.log('from', this.props.location.state);
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      <Redirect to={from} />;
    }
    return (
      <div>
        <p>
          You must log in to view this page at {from.pathname}
          <button onClick={this.login}>Log in</button>
        </p>
      </div>
    );
  }
}

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
      <Route exact path="/" component={Login} />
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Navbar;
