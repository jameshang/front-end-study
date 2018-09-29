import React, { Component } from 'react';

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

export { Counter }