import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from '../pages/Home';
import Other from '../pages/Other';

// render on page
export default class Header extends React.Component {
    render() {        
        return (
            <BrowserRouter>
                <header>
                    <div className="container"><a href="#" data-activates="nav-mobile" className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only"><i className="material-icons">menu</i></a></div>
                    <ul id="nav-mobile" className="side-nav fixed">
                        <li className="logo">
                            <img src="../../assets/logo/logo.jpg" width="290px" height="100%"></img>
                        </li>
                            <ul className="collapsible collapsible-accordion">
                            <li className="bold"><a className="collapsible-header waves-effect waves-teal">Percussions</a>
                                <div className="collapsible-body">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/other">Other</Link></li>
                                    <li><a href="#">berdpad</a></li>
                                    <li><a href="#">berdpad pro</a></li>
                                    <li><a href="#">berdrums</a></li>
                                    <li><a href="#">berdrums pro</a></li>
                                </ul>
                                </div>
                            </li>
                            <li className="bold"><a className="collapsible-header waves-effect waves-teal">Projects</a>
                                <div className="collapsible-body">
                                <ul>
                                    <li ><a href="pages/rock.html">Rock</a></li>
                                    <li><a href="#">Reggae</a></li>
                                    <li><a href="#">EDM</a></li>
                                    <li><a href="#">Dubstep</a></li>
                                    <li><a href="#">Chill</a></li>
                                    <li><a href="#">Acoustic</a></li>
                                </ul>
                                </div>
                            </li>
                            <li className="bold"><a className="collapsible-header waves-effect waves-teal">Practice<span className="new badge"></span></a>
                                <div className="collapsible-body">
                                <ul>
                                    <li><a href="#">beginner berdcajon</a></li>
                                    <li><a href="#">advanced berdcajon</a></li>
                                    <li><a href="#">beginner berdpad</a></li>
                                    <li><a href="#">advanced berdpad</a></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        <li className="bold"><a href="#" className="waves-effect waves-teal">Settings</a></li>
                        <li className="bold"><a href="#" className="waves-effect waves-teal">DAW</a></li>
                        <li className="bold"><a href="#" className="waves-effect waves-teal">Plugins</a></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/other" component={Other} />
                </header>
            </BrowserRouter>
        )
    }
};