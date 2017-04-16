import React from 'react';
const V4 = require('uuid/v4');
import styled from 'styled-components';

const Username = styled.span`
color: red;
font-size: 1.1rem;
font-weight: 800;
`;
const MessagesList = styled.ul`
  list-style-type: none;
  display:flex;
  justify-content: center
  margin:0;
`;

const ChatOutput = props => {
  const { value, user } = props;
  return (
    <ul>
      {value.map(item => {
        return (
          <MessagesList key={V4()}>
            <Username>{user.username}</Username>: {item}
          </MessagesList>
        );
      })}
    </ul>
  );
};

export default ChatOutput;
