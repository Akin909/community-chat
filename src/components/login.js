import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Input from './../styled-components/input.js';
import Form from './../styled-components/form.js';
import { socket } from '../App';

const Label = styled.label`
  margin-top: 0.4rem;
  width: 100%;
  height: 100%;
  text-align: center;
`;
class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      fromMe: false,
    };
  }

  handleUsernameInput(event) {
    this.setState({
      username: event.target.value,
    });
  }
  handlePasswordInput(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      fromMe: true,
      submitted: true,
    });
    socket.emit('user:login', this.state);
  }

  render() {
    if (this.state.submitted) {
      return (
        <Redirect
          to={{
            pathname: '/chat',
          }}
        />
      );
    }
    return (
      <Form onSubmit={this.handleLogin}>
        <Label htmlFor="username">Username: </Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Please enter a user name"
          onChange={this.handleUsernameInput}
          value={this.state.username}
          required
        />
        <Label htmlFor="password">Password: </Label>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="Please enter a password"
          onChange={this.handlePasswordInput}
          value={this.state.password}
          required
        />
        <Input button type="submit" value="submit" />
      </Form>
    );
  }
}

Login.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // dispatch: PropTypes.func.isRequired,
};

export default Login;
