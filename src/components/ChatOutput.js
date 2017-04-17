import React, { Component } from 'react';
import V4 from 'uuid/v4';
import styled from 'styled-components';

const Username = styled.span`
color: ${props => (props.mine ? 'green' : props.theme.color)};
font-size: 1.1rem;
font-weight: 800;
`;

const Message = styled.span`
  font-size: 1.1rem;
  margin-left: 0.5rem;
`;

const MessagesList = styled.ul`
  list-style-type: none;
  display:flex;
  margin:0;
  padding: 1rem;
  height: auto;
  min-height: 10%;
  background: white;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 60%;
`;

class ChatOutput extends Component {
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const messagesList = document.querySelector('#messagesList');
    messagesList.scrollTop = messagesList.scrollHeight;
  }
  render() {
    const { messageDetails, user } = this.props;
    const messages = messageDetails.map(message => {
      return (
        <MessagesList key={V4()}>
          <Username mine={user.fromMe}>
            {message.username ? message.username + ':' : 'User:'}
          </Username>
          {' '}
          <Message>{message.body}</Message>
        </MessagesList>
      );
    });
    return <MessageContainer id="messagesList">{messages}</MessageContainer>;
  }
}

export default ChatOutput;
