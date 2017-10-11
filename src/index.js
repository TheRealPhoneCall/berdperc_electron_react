import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, IndexRoute, Switch, Link, NavLink} from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Other from './pages/Other';
import Settings from './pages/Settings';
import Layout from './components/Layout'
import Header from './components/Header'
import Nav from './components/Nav'

// render on page
ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,
    document.getElementById('app')
);

// initiate js objects/plugins
const select = document.querySelector('select')
select.material_select();
