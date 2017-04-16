import React from 'react';

const ChatInput = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder="Input your text here"
      />
    </form>
  );
};

export default ChatInput;
