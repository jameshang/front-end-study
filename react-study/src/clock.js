import React, { Component } from 'react';

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

export { Clock }
