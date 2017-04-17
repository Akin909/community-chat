import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatInput from '../components/ChatInput';
import ChatOutput from '../components/ChatOutput';
import { handleChatSubmit } from '../actions/index';
import io from 'socket.io-client';

//Socket is hard coded to my backend server on 4005
//TODO need to have a variable here to keep these two connected
const socket = io.connect('http://localhost:4005');

class Chat extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
    socket.on('user:join', this._userJoined);
  }
  // Socket response events
  _initialize(data) {
    console.log(data);
  }

  _messageRecieve(data) {
    console.log('message received front end', data);
  }

  _userJoined(data) {
    console.log('user joined', data);
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

  render() {
    return (
      <div>
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
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleChatSubmit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
