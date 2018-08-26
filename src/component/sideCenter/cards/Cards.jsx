import React, { Component } from 'react';
import './Cards.css';
export class Cards extends Component {
    render() {
        return (
            <section className="card-columns">
                {this.props.children}
            </section>
        );
    }
}

export class Card extends Component {
    render() {
        return (
            <div className={'card CardInner text-white '+this.props.bgcolor}>
                <img className="card-img CardInner-Img"/>
                <div className="card-img-overlay">
                    <h5 className="card-title font-weight-bold CardInner-Title">{this.props.title}</h5>
                    {/* <p className="card-text CardInner-Description"></p> */}
                    <p className="card-text CardInner-Datetime">{this.props.datetime}</p>
                </div>
            </div>
        );
    }
}

export default Cards;