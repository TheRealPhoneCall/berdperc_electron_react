import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from '../pages/Home';
import Other from '../pages/Other';
import About from '../pages/About';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

// render on page
export default class Footer extends React.Component {
    render() {        
        return (
          <footer class="page-footer">
            <div class="container">
              
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2014 Copyright Text
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
        )
    }
};