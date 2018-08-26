/* This script */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Pages */
import Index from './page/Index';
import Dashboard from './page/dashboard/Dashboard';


ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
</Router>, document.getElementById('root'));
registerServiceWorker();
