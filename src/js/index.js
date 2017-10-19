import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from "mobx-react"

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Other from './pages/Other';
import Settings from './pages/Settings';
import Layout from './components/Layout'
// import Layout from './components/LayoutRedux'
import Header from './components/Header'
import Nav from './components/Nav'

import TodoStore from "./stores/TodoStore"

// render on page
ReactDOM.render(
    <Provider >
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

