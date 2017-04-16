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

    this.state = {
      username: '',
      password: '',
    };
  }

  handlePasswordInput(event) {
    console.log(event.target.value);
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Please enter a user name"
          onChange={this.handleUsernameInput}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          placeholder="Please enter a password"
          onChange={this.handlePasswordInput}
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
