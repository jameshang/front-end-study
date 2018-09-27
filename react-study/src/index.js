import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Hello, Clock, Counter} from "./components";
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

Hello.propTypes={
    title: PropTypes.string
}

var title="James";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello title={title}/>, document.getElementById('hello'));
ReactDOM.render(<Clock/>, document.getElementById('clock'));
ReactDOM.render(<Counter/>, document.getElementById('counter'));
registerServiceWorker();
