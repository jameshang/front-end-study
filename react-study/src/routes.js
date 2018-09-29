import React from 'react';
import App from './App';
import { Clock } from "./clock";
import { Counter } from "./counter";
import { Region } from "./region";
import { NotFound } from './components';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const Routes = () => {
    return (
        <Router history={createBrowserHistory()} >
            <div>
                <Route path='/clock' component={Clock} />
                <Route path='/counter' component={Counter} />
                <Route path='/region' component={Region} />
                <Route path='/home' component={App} />
            </div>
        </Router>
    );
}

function ShowInfo() {
    return <h3>Show info.</h3>
}

export { Routes, ShowInfo }
