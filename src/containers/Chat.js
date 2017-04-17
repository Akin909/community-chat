import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatInput from '../components/ChatInput';
import ChatOutput from '../components/ChatOutput';
import { handleChatSubmit, updateUserList, removeUser } from '../actions/index';
import uuid from 'uuid';

import { socket } from '../App';

class Chat extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this._initialize = this._initialize.bind(this);
    this._userJoined = this._userJoined.bind(this);
    this._messageRecieve = this._messageRecieve.bind(this);
    this._userLeft = this._userLeft.bind(this);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    socket.on('user:join', this._userJoined);
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
    socket.on('user:left', this._userLeft);
  }
  // Socket response events
  _initialize(data) {
    this.props.updateUserList(data);
  }

  _userLeft(data) {
    // TODO keep track of user to update when right user has left
    this.props.removeUser(data.name);
  }

  _messageRecieve(messageDetails) {
    // console.log('message received front end', messageDetails);
    this.props.handleChatSubmit(messageDetails);
  }

  _userJoined(data) {
    // console.log('props in user joined', this.props);
    this.props.updateUserList(data);
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // dispatch: PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    event.preventDefault();
    const messageDetails = {
      username: this.props.login.username || 'User',
      body: event.target.firstChild.value,
    };
    socket.emit('send:message', messageDetails);
    this.props.handleChatSubmit(messageDetails);
    this.setState({
      value: '',
    });
  }

  handleInput(event) {
    this.setState({
      value: event.target.value,
    });
  }

  showUsers(props) {
    return props.user.map(user => {
      return <li key={uuid()}>{user.username}</li>;
    });
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <ul>User List: {this.showUsers(this.props)} </ul>
        <ChatOutput user={login} messageDetails={this.props.messageDetails} />
        <ChatInput
          value={this.state.value}
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageDetails: state.input,
    login: state.login,
    user: state.user,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { handleChatSubmit, updateUserList, removeUser },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
