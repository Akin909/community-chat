import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatInput from '../components/ChatInput';
import ChatOutput from '../components/ChatOutput';
import { handleChatSubmit, updateUserList } from '../actions/index';
import io from 'socket.io-client';
import uuid from 'uuid';

//Socket is hard coded to my backend server on 4005
//TODO need to have a variable here to keep these two connected
const socket = io('http://localhost:4005');

class Chat extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this._initialize = this._initialize.bind(this);
    this._userJoined = this._userJoined.bind(this);
    this._messageRecieve = this._messageRecieve.bind(this);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    socket.on('user:join', this._userJoined);
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
  }
  // Socket response events
  _initialize(data) {
    this.props.updateUserList(data);
  }

  _messageRecieve(data) {
    console.log('message received front end', data);
    this.props.handleChatSubmit(data.text);
  }

  _userJoined(data) {
    console.log('props in user joined', this.props);
    this.props.updateUserList(data);
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // dispatch: PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    event.preventDefault();
    socket.emit('send:message', event.target.firstChild.value);
    this.props.handleChatSubmit(event.target.firstChild.value);
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
      return <li key={uuid()}>{user.name}</li>;
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <ul>User List: {this.showUsers(this.props)} </ul>
        <ChatOutput user={this.props.login} value={this.props.input} />
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
    input: state.input,
    login: state.login,
    user: state.user,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleChatSubmit, updateUserList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
