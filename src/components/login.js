import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getLoginDetails } from '../actions/index';

class Login extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // dispatch: PropTypes.func.isRequired,
  };

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
    const userDetails = {};
    userDetails.submitted = true;
    userDetails.username = this.refs.username.value;
    userDetails.password = this.refs.password.value;
    this.props.getLoginDetails(userDetails);
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
      <form onSubmit={this.handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          ref="username"
          placeholder="Please enter a user name"
          onChange={this.handleUsernameInput}
          value={this.state.username}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          ref="password"
          placeholder="Please enter a password"
          onChange={this.handlePasswordInput}
          value={this.state.password}
          required
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getLoginDetails }, dispatch);
};

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
