import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatInput from '../components/ChatInput';
import ChatOutput from '../components/ChatOutput';
import { handleChatSubmit } from '../actions/index';

class Chat extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      value: '',
    };
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // dispatch: PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleChatSubmit(event.target.firstChild.value);
    event.target.firstChild.value = '';
  }

  handleInput(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    console.log('input', this.props.input);
    return (
      <div>
        <ChatInput
          value={this.state.value}
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
        />
        <ChatOutput value={this.props.input} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleChatSubmit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
