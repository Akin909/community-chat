import React from 'react';
const V4 = require('uuid/v4');

const ChatOutput = props => {
  const { value } = props;
  return (
    <ul>
      {value.map(item => {
        return <li key={V4()}>{item}</li>;
      })}
    </ul>
  );
};

export default ChatOutput;
