import React from 'react';
import { connect } from "react-redux"
import { BrowserRouter, Route, IndexRoute, Switch, Link, NavLink } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
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