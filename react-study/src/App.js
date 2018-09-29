import React, { Component } from 'react';
import {Hello} from './components';
import {Clock} from './clock';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <h3>React study</h3>
        <Hello />
        <Clock />
      </div>
    );
  }
}

Hello.propTypes = {
  title: PropTypes.string
}

export default App;
