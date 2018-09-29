import React, { Component } from 'react';

class Hello extends Component {
    render() {
        var title=this.props.title;
        if(!title){
            title='student';
        }
        return (
            <h3>Hello {title}</h3>
        );
    }
}

const NotFound = () => {
    return (
        <div>
            <h3>Page not found!</h3>
            <h3>Page not found!!</h3>
            <h3>Page not found!!!</h3>
        </div>
    );
}

export { Hello, NotFound };