import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from '../pages/Home';
import Other from '../pages/Other';
import About from '../pages/About';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

// render on page
export default class Nav extends React.Component {
    render() {        
        return (
            <BrowserRouter>
              <nav>
                <div className="nav-wrapper grey">
                  <div className="brand-logo">
                    <Link to="/" className="brand-logo">berdper</Link>
                  </div>
                  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/help">Help</Link></li>
                  </ul>
                  <ul className="side-nav" id="mobile-demo">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/help">Help</Link></li>
                  </ul>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/other" component={Other} />
                <Route path="/about" component={About} />
                <Route path="/settings" component={Settings} />
                <Route path="/help" component={Help} />
              </nav>
            </BrowserRouter>
        )
    }
};