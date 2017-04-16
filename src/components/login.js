import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
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
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }
  handlePasswordInput(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    if (this.state.submitted) {
      return;
    }
    this.setState({
      submitted: true,
      username: this.state.username,
      password: this.state.password,
    });
    console.log('state', this.state);
  }

  render() {
    if (this.state.submitted) {
      console.log('context', this.context);
      return (
        <div>You have successfully registered in {this.state.username}</div>
      );
    }
    return (
      <form onSubmit={this.handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Please enter a user name"
          onChange={this.handleUsernameInput}
          value={this.state.username}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
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

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Login);
