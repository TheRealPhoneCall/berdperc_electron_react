import React from 'react'
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

import BerdPercDB from '../../data/rxdb_service'
@inject("perc_store", "song_store", "config_store", "map_list_store")
@observer
export default class Layout extends React.Component {
    async componentWillMount(){
        // initialize db
        const db_obj = new BerdPercDB('berdpercdb', 'websql')
        const db = await db_obj.createDB()
        console.log("db Main.js:", db_obj, db)

        // destructure
        const { perc_store, song_store, 
                config_store, map_list_store } = this.props
        
        await Promise.all([
            perc_store.setCollection(db_obj),
            song_store.setCollection(db_obj),
            config_store.setCollection(db_obj),
            map_list_store.setCollection(db_obj)
        ])        
    }

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