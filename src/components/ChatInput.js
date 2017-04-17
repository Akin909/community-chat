import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem;
  font-size: 1.3rem;
  width: 100%;
  height: 3rem;
  box-shadow: 0px 1px 2px grey;
  border: none;
`;

const ChatInput = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        autofocus
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder="Write your message here..."
      />
    </form>
  );
};

export default ChatInput;
