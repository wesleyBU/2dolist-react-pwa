import React, { Component } from 'react';
import './BtnMenu.css';

export default class BtnMenu extends Component {

    render() {
        return (
            <button onClick={this.props.callback} className="MenuSlide">
                <span></span>
                <span></span>
                <span></span>
            </button>
        );
    }
}

