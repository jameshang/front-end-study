import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <h3>Hello {this.props.title}</h3>
        );
    }
}

function SimpleDateFormat(props) {
    return <h3>Now is {props.date.toLocaleTimeString()}.</h3>
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <SimpleDateFormat date={this.state.date} />
        );
    }
}

/**
 * 主要演示了事件回调函数绑定this的三种方式
 * handleIncrease, handleDecrease和handleReset分别用了不同的this绑定方式
 */
class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.handleIncrease = this.handleIncrease.bind(this);
    }

    handleIncrease() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    handleDecrease = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    handleReset() {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
                <button onClick={(e) => this.handleReset(e)}>Reset</button>
                <h3>{this.state.count}</h3>
            </div>
        );
    }

}

export { Hello, Clock, Counter };