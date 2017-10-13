import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collection, Collapsible, CollapsibleItem, CollectionItem } from 'react-materialize'

// Components
import Home from '../pages/Home';
import Other from '../pages/Other';

// Modules
import {PercAPI} from '../data/api'

// render on page
export default class Header extends React.Component {

    render() {
        const collectionItemClass = "collapsible-header waves-effect waves-teal"        
        const percussions = PercAPI.all()
        return (
            <header>
                <div className="container">
                    <a href="#" data-activates="nav-mobile" className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only"><i className="material-icons">menu</i></a>
                </div>
                <ul id="nav-mobile" className="side-nav fixed">
                    <li className="logo">
                        <img src="assets/logo/logo.jpg" width="290px" height="100%"></img>
                    </li>
                    <Collection>   
                        <CollectionItem>
                            <Collapsible accordion>
                                <CollapsibleItem header='Percussions' icon='view_module' className={collectionItemClass}>
                                    <Collection>
                                        {
                                            percussions.map(function (percussion, i){
                                                return (                                            
                                                    <CollectionItem className={collectionItemClass} key={i}><Link to={`/perc/${percussion.id}/edit`}>{percussion.name}</Link></CollectionItem>                                            
                                                )
                                            })
                                        }
                                    </Collection>
                                </CollapsibleItem>
                                <CollapsibleItem header='Config Library' icon='library_music' className={collectionItemClass}>
                                    <Collection>
                                    </Collection>
                                </CollapsibleItem>
                            </Collapsible>
                        </CollectionItem>                     
                        
                        <CollectionItem className={collectionItemClass} ><Link to="/settings"><i className="material-icons">settings</i>Settings</Link></CollectionItem>
                        <CollectionItem className={collectionItemClass} ><Link to="/other"><i className="material-icons">widgets</i>Plugins</Link></CollectionItem>
                    </Collection>
                    {/* <ul className="collapsible collapsible-accordion">
                        <li className="bold"><a className="collapsible-header waves-effect waves-teal">Percussions</a>
                            <div className="collapsible-body">
                                <ul>
                                    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/other">Other</NavLink></li>
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
                        <li className="bold"><Link to="/settings" className="waves-effect waves-teal">Settings</Link></li>
                        <li className="bold"><a href="#" className="waves-effect waves-teal">DAW</a></li>
                        <li className="bold"><a href="#" className="waves-effect waves-teal">Plugins</a></li>
                    </ul> */}
                </ul>
            </header>
        )
    }
};