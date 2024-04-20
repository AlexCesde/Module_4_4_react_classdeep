import React, { Component } from 'react';

class ComponentClassCycleDeep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello",
            color: props.color
        };
        console.log("1- Constructor");
    };

    render() {
        console.log("2- Render...");

        return (
            <>
                <h1 style={this.state.color}>{this.state.title}</h1>
            </>
        );
    };
};

export default ComponentClassCycleDeep;