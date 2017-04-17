import React, { Component } from 'react';
const V4 = require('uuid/v4');
import styled from 'styled-components';

const Username = styled.span`
color: ${props => (props.mine ? 'blue' : 'red')};
font-size: 1.1rem;
font-weight: 800;
`;
const Message = styled.span`
  font-size: 1.1rem;
`;
const MessagesList = styled.ul`
  list-style-type: none;
  display:flex;
  justify-content: center
  margin:0;
  padding: 0;
`;

class ChatOutput extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const messagesList = document.querySelector('#messagesList');
    messagesList.scrollTop = messagesList.scrollHeight;
  }
  render() {
    const { value, user } = this.props;
    const messages = value.map(item => {
      return (
        <MessagesList key={V4()}>
          <Username mine={user.fromMe}>
            {user.username ? user.username + ':' : 'User:'}
          </Username>
          {' '}
          <Message>{item}</Message>
        </MessagesList>
      );
    });
    return <div id="messagesList">{messages}</div>;
  }
}

export default ChatOutput;
