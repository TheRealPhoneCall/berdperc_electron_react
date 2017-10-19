import React from 'react'
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

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