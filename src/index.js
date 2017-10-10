import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import Other from './pages/Other';
import Layout from './components/Layout'

// render on page
ReactDOM.render(
    <Home />,
    document.getElementById('app')
);