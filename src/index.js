import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// import Home from './pages/home';
// import Other from './pages/other';

// import Home from './pages/Home'
import Layout from './components/Layout'
import Header from './components/Header'

// render on page
ReactDOM.render(
    <Header />,
    document.getElementById('app')
);