import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import Home from '../pages/Home';
import Other from '../pages/Other';
import About from '../pages/About';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

// render on page
export default class Nav extends React.Component {
    render() {        
        return (            
          <nav>
            <div className="nav-wrapper grey">
              <div className="brand-logo">
                <Link to="/" className="brand-logo">berdperc</Link>
              </div>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/settings">Settings</NavLink></li>
                <li><NavLink activeClassName="active" to="/help">Help</NavLink></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/settings">Settings</NavLink></li>
                <li><NavLink activeClassName="active" to="/help">Help</NavLink></li>
              </ul>
            </div>
          </nav>            
        )
    }
};