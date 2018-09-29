import React, { Component } from 'react';
import $ from 'jquery';

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

/**
 * 主要演示：
 *      下拉列表事件，以及联动操作
 *      Ajax调用，跨域问题还未解决
 */
class Region extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityData: [],
            region: [],
            city: [],
            selectedCity: ''
        }
    }

    getCity(key, cityData) {
        var city = cityData[key].map(
            function (item, index, array) {
                return <option key={item.key} value={item.key}>{item.value}</option>
            }
        );
        return city;
    }

    handleRegion = (event) => {
        var city = this.getCity(event.target.value, this.state.cityData);
        this.setState({
            city: city
        });
    }

    handleCity = (event) => {
        var idx = event.target.selectedIndex;
        var o = event.target.options[idx];
        var s = o.text + '(' + o.value + ')';
        this.setState({
            selectedCity: s
        })
    }

    handleRegionData = (result, status) => {
        console.log('Handle region data status===%s', status);
        var cityData = {};
        var defKey;
        var region = result.map(
            function (item, index, array) {
                if (!defKey) {
                    defKey = item.key;
                }
                cityData[item.key] = item.city;
                return <option key={item.key} value={item.key}>{item.value}</option>;
            }
        );
        var city = this.getCity(defKey, cityData);
        this.setState({
            cityData: cityData,
            region: region,
            city: city,
            selectedCity: ''
        });
    };

    handleRegionError = (req, status, err)=>{
        console.log('Handle region error: req=%s\nstatus=%s\nerr=%s', req, status, err);
    }

    componentDidMount() {
        this.serverRequest = $.ajax({
            url: this.props.source,
            method: "GET",
            dataType: "json",
            success: this.handleRegionData
        });
    }

    render() {
        return (
            <div>
                Region: <select onChange={this.handleRegion}>{this.state.region}</select><p></p>
                City:<select onChange={this.handleCity}>{this.state.city}</select><p></p>
                <h3>Selected city: {this.state.selectedCity}</h3>
            </div>
        );
    }
}

export { Hello, Clock, Counter, Region };