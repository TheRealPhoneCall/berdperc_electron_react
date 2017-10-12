import React from 'react';
import {BrowserRouter, Route, IndexRoute, Switch, Link, NavLink} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Other from '../pages/Other';
import Settings from '../pages/Settings';
import PercRun from '../components/percussions/PercRun';
import PercEdit from '../components/percussions/PercEdit';
import PercPadTab from '../components/percussions/PercPadTab';


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
                        <Route exact path="/perc/:id/" component={PercRun}/>
                        <Route exact path="/perc/:id/edit" component={PercEdit}/>
                        {/* <Route exact path="/perc/:id/edit/:pad_id" component={PercPadTab}/> */}
                        <Route exact path="/perc/:id/run" component={PercRun}/>
                    </Switch>
                </div>
            </div>          
        )
    }
};