import React, { Component } from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* Components */
import Navbar from '../../component/top/Navbar';
import BtnMenu from "../../component/top/BtnMenu";
import Menu, { MenuItemLink } from '../../component/sideBar/Menu';
import Main from "../../component/sideCenter/Main";
/* import SlideBox from "../../component/sideCenter/SlideBox"; */

/* Pages */
import { ToDoShow, Form, ToDoTrash } from './toDo/ToDo';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            triggerMenu: false
        }
        if (!localStorage.list)
            localStorage.setItem('list', JSON.stringify([]))
    }

    triggerMenu = () => {
        this.setState({ triggerMenu: !this.state.triggerMenu });
    }

    render() {

        return (
            <div className="Dashboard">
                <Navbar>
                    <BtnMenu callback={this.triggerMenu} />
                </Navbar>
                <Router basename='/dashboard'>
                    <div className="BodyApp">
                        <Menu trigger={this.state.triggerMenu}>
                            <MenuItemLink callback={this.triggerMenu} to='/show-to-do' exact={false} label='Home' />
                            <MenuItemLink callback={this.triggerMenu} to='/new-to-do' exact={false} label='New' />
                        </Menu>
                        <Main>
                            <Switch>
                                <Route exact path='/' component={Index} />
                                <Route path='/show-to-do' component={ToDoShow} />
                                <Route path='/new-to-do' component={() => <Form />} />
                                <Route path='/trash-to-do' component={ToDoTrash} />
                                <Route path='/task/:id' component={({match})=><Form noWritable={true} index={match.params.id}/>}/>
                            </Switch>
                        </Main>
                    </div>
                </Router>
            </div>
        );
    }
}

class Index extends Component {
    render() {
        return <h1>Index</h1>
    }
}

export default Dashboard; 