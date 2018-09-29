import React, { Component } from 'react';
import $ from 'jquery';

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

    handleRegionError = (req, status, err) => {
        console.log('Handle region error: req=%s\nstatus=%s\nerr=%s', req, status, err);
    }

    componentDidMount() {
        var url=this.props.source;
        if(!url){
            url='http://localhost:3000/region.json';
        }
        this.serverRequest = $.ajax({
            url: url,
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

export { Region }