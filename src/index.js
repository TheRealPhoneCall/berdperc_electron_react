import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from "react-redux"

import Home from './js/pages/Home'
import About from './js/pages/About'
import Help from './js/pages/Help'
import Other from './js/pages/Other';
import Settings from './js/pages/Settings';
import Layout from './js/components/Layout'
// import Layout from './js/components/LayoutRedux'
import Header from './js/components/Header'
import Nav from './js/components/Nav'

import store from "./js/store"

// render on page
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);


