import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom'
import { Provider } from "mobx-react"

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Other from './pages/Other'
import Settings from './pages/Settings'
import Layout from './components/Layout'
import Header from './components/Header'
import Nav from './components/Nav'

import PercStore from "./stores/PercStore"
import SongStore from "./stores/SongStore"
import MapListStore from "./stores/MapListStore"
import ConfigStore from "./stores/ConfigStore"
import PadStore from "./stores/PadStore"

// render on page
ReactDOM.render(
    <Provider perc_store={PercStore} 
              song_store={SongStore} 
              config_store={ConfigStore}
              map_list_store={MapListStore}
              pad_store={PadStore}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);


