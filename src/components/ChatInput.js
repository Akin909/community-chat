import React from 'react';
import Input from '../styled-components/input';
import Form from '../styled-components/form';

const ChatInput = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        chat
        autofocus
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder="Write your message here..."
      />
    </Form>
  );
};

export default ChatInput;
