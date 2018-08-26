import React, { Component } from 'react';
import './Menu.css'
import { Route, Link } from 'react-router-dom';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            test: ''
        }
    }


    componentDidUpdate() {
        if (this.props.trigger !== this.state.open)
            this.setState({
                open: !this.state.open
            })

    }
    render() {
        return (
            <aside className={'Menu ' + (this.state.open ? 'OpenMenu' : 'CloseMenu')}>
                <div className="list-group list-group-flush">
                    {this.props.children}
                    <a href="/" className='list-group-item'>Exit</a>
                </div>
            </aside>
        );
    }
}

export class MenuItemLink extends Component {
    render() {
        return (
            <Route
                path={this.props.to}
                exact={this.props.exact}
                children={({ match }) => (
                    <Link
                        onClick={this.props.callback}
                        className={'list-group-item ' + (match ? "on-list" : "")}
                        to={this.props.to}>{this.props.label}</Link>
                )}
            />

        )
    }
}

export default Menu;