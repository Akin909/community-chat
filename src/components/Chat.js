import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { socket } from '../App';

import { addMessages } from './../actions/index';

import ChatInput from '../components/ChatInput';
import ChatOutput from '../components/ChatOutput';
import {
  UserList,
  ChatContainer,
  AllMessages,
} from '../styled-components/chat_components.js';

class Chat extends Component {
  constructor() {
    super();

    // this.welcomeUser = this.welcomeUser.bind(this);
    // this._initialize = this._initialize.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this._userJoined = this._userJoined.bind(this);
    this._messageRecieve = this._messageRecieve.bind(this);
    this._userLeft = this._userLeft.bind(this);

    this.state = {
      messages: [],
      users: [],
      value: '',
    };
  }

  componentDidMount() {
    // TODO need to load new users once this component mounts
    socket.on('user:join', this._userJoined);
    socket.on('init', this._initialize);
    socket.on('user:left', this._userLeft);
    socket.on('new:message', this._messageRecieve);
  }

  _initialize(data) {
    console.log('initialization', data);
  }

  // Socket response events
  _userLeft(data) {
    // TODO keep track of user to update when right user has left
    console.log(data.name);
    this.props.addMessages({ username: 'Admin', body: 'A User has departed' });
  }

  _messageRecieve(message) {
    this.props.addMessages(message);
  }

  _userJoined(data) {
    console.log('User joined: ', data);
    this.setState({
      users: [...this.state.users, data.username],
    });
  }

  handleChatSubmit(event) {
    //TODO NEED TO FIGURE WHO THE CURRENT USER IS USING SOCKET.USERNAME??
    const currentMessage = {
      body: event.target.firstChild.value,
      username: this.state.users[this.state.length - 1] || 'Guest1',
    };
    event.preventDefault();
    socket.emit('send:message', currentMessage);
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
    return this.state.users.map(user => {
      return <li key={uuid()}>{user.username}</li>;
    });
  }

  render() {
    return (
      <ChatContainer>
        <AllMessages>
          <UserList>
            User List: {this.state.users.map(user => {
              return <li key={uuid()}>{user}</li>;
            })}
          </UserList>
          <ChatOutput messages={this.props.messages} />
        </AllMessages>
        <ChatInput
          value={this.state.value}
          onChange={this.handleInput}
          onSubmit={this.handleChatSubmit}
        />
      </ChatContainer>
    );
  }
}

Chat.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMessages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
