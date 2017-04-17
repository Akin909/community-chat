import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getLoginDetails, updateUserList } from '../actions/index';
import styled from 'styled-components';

import Input from './../styled-components/input.js';
import Form from './../styled-components/form.js';

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
    if (this.props.login.submitted) {
      return;
    }
    const userDetails = {
      fromMe: true,
      submitted: true,
      username: this.refs.username.value,
      password: this.refs.password.value,
    };
    this.props.getLoginDetails(userDetails);
    this.props.updateUserList(userDetails);
  }

  render() {
    if (this.props.login.submitted) {
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
          ref="username"
          placeholder="Please enter a user name"
          onChange={this.handleUsernameInput}
          value={this.state.username}
          required
        />
        <Label htmlFor="password">Password: </Label>
        <Input
          type="text"
          name="password"
          ref="password"
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getLoginDetails, updateUserList }, dispatch);
};

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
