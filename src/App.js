import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Chat from './containers/Chat';
import rootReducer from './reducers/index';
import Navbar from './components/navbar';

import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          Community Chat
        </div>
      </Provider>
    );
  }
}

export default App;
