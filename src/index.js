import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home'
import Layout from './components/Layout'
import Header from './Header'

// render on page
ReactDOM.render(
    <Header />,
    document.getElementById('app')
);