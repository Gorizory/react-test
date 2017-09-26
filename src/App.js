import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './redusers/actions';
import Counter from './components/Counter';

const store = createStore(counter);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Counter/>
        </Provider>
    );
  }
}

export default App;
