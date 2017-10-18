import React from 'react';
import {BrowserRouter, Route, IndexRedirect, Redirect, Switch, Link, NavLink} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Other from '../pages/Other';
import Settings from '../pages/Settings';
import Redux from '../pages/Redux';
import PercRun from '../components/percussions/PercRun';
import PercEdit from '../components/percussions/PercEdit';
import Songs from '../pages/Songs';
import SongRun from '../components/songs/SongRun';
import SongEdit from '../components/songs/SongEdit';


export default class Main extends React.Component {
    constructor(){
        super()
        console.log(window.location.href)
    }
    
    render() {        
        return (            
            <div className="row">
                <div className="col s9 offset-s3">
                    {window.location.pathname.includes('index.html') && <Redirect to="/" />}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/help" component={Help}/>
                        <Route path="/other" component={Other}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/redux" component={Redux}/>
                        <Route exact path="/perc/:id/" component={PercRun}/>
                        <Route exact path="/perc/:id/edit" component={PercEdit}/>
                        <Route exact path="/perc/:id/run" component={PercRun}/>
                        <Route exact path="/songs/:id" component={Songs}/>
                        <Route exact path="/songs/:id/edit/:json_file" component={SongEdit}/>
                        <Route exact path="/songs/:id/run/:json_file" component={SongRun}/>
                    </Switch>
                    
                </div>
            </div>          
        )
    }
};