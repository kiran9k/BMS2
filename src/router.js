import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Main from './main';
import Assignment1 from './Assignment1';

const Routers = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path='/assignment1' component={Assignment1}/>
            <Route path='/assignment2' component={App}/>
        </Switch>
    </Router>
)
export default Routers;