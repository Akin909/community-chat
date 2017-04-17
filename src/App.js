import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import Navbar from './components/navbar';
import io from 'socket.io-client';

//Socket is hard coded to my backend server on 4005
//TODO need to have a variable here to keep these two connected
export const socket = io('http://localhost:4005');

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
        </div>
      </Provider>
    );
  }
}
