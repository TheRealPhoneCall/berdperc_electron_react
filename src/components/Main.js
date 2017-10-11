import React from 'react';
import {BrowserRouter, Route, IndexRoute, Switch, Link, NavLink} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Other from '../pages/Other';
import Settings from '../pages/Settings';


// render on page
export default class Main extends React.Component {
    render() {        
        return (
            
            <div className="row">
                <div className="col s9 offset-s3">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/help" component={Help}/>
                        <Route path="/other" component={Other}/>
                        <Route path="/settings" component={Settings}/>      
                    </Switch>
                </div>
            </div>          
        )
    }
};