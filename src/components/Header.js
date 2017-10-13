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
        const percussions = PercAPI.all()
        const collapsibleItemClass = "sidebard-header collapsible-header waves-effect waves-teal" 
        const collapsibleSubItemClass = "sidebard-header waves-effect waves-teal"    
        const noncollapsibleItemClass = "sidebard-header non-collapsible-header waves-effect waves-teal"       
        const noncollapsibleItemStyle = {
            paddingLeft: "16px"
        }
        return (
            <header>
                <div className="container">
                    <a href="#" data-activates="nav-mobile" className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only"><i className="material-icons">menu</i></a>
                </div>
                <ul id="nav-mobile" className="side-nav fixed">
                    <li className="logo">
                        <img src="assets/logo/logo.jpg" width="290px" height="100%"></img>
                    </li>
                    
                    <ul className="collapsible collapsible-accordion">
                        <li className="bold"><NavLink activeClassName={`${noncollapsibleItemClass} active`} style={noncollapsibleItemStyle} to="/">Home</NavLink></li>
                        <li className="bold"><a className={collapsibleItemClass}>Percussions</a>
                            <div className="collapsible-body">
                                <ul>                                    
                                    {
                                        percussions.map(function (percussion, i){
                                            return ( 
                                                <li key={i}><Link to={`/perc/${percussion.id}/edit`} className={collapsibleSubItemClass}>{percussion.name}</Link></li>                                                 
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                        <li className="bold"><a className={collapsibleItemClass}>Projects</a>
                            <div className="collapsible-body">
                                <ul>
                                    <li><a href="pages/rock.html" className={collapsibleSubItemClass}>Rock</a></li>
                                    <li><a href="#" className={collapsibleSubItemClass}>Reggae</a></li>
                                    <li><a href="#" className={collapsibleSubItemClass}>EDM</a></li>
                                    <li><a href="#" className={collapsibleSubItemClass}>Dubstep</a></li>
                                    <li><a href="#" className={collapsibleSubItemClass}>Chill</a></li>
                                    <li><a href="#" className={collapsibleSubItemClass}>Acoustic</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="bold"><a className={collapsibleItemClass}>Practice<span className="new badge"></span></a>
                            <div className="collapsible-body">
                                <ul>
                                    {
                                        percussions.map(function (percussion, i){
                                            return ( 
                                                <li key={i}><Link to={`/perc/${percussion.id}/run`} className={collapsibleSubItemClass}>Practice {percussion.name}</Link></li>                                                 
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                        <li className="bold"><Link to="/settings" className={noncollapsibleItemClass} style={noncollapsibleItemStyle}>Settings</Link></li>
                        <li className="bold"><a href="#" className={noncollapsibleItemClass} style={noncollapsibleItemStyle}>DAW</a></li>
                        <li className="bold"><a href="#" className={noncollapsibleItemClass} style={noncollapsibleItemStyle}>Plugins</a></li>
                    </ul> 
                </ul>
            </header>
        )
    }
};