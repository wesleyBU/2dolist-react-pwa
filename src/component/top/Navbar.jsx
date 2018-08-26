import React, { Component } from 'react';
import './Navbar.css';

class Navbar
    extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand font-weight-bold" href="/">
                    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    2DoList
                </a>
                {this.props.children}
            </nav>


        );
    }
}


export default Navbar;