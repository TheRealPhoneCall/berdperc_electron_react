import React from 'react';
import {BrowserRouter, Route, IndexRoute, Switch, Link, NavLink} from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';



// render on page
export default class Layout extends React.Component {
    render() {        
        return (
            <div>
                <Header />
                <Nav />
                <Main />       
            </div>
        )
    }
};