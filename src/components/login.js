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
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Please enter a user name"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          placeholder="Please enter a password"
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Login);
