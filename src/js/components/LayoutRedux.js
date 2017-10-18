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
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }
    render() {       
        const { user, tweets } = this.props; 
        if (!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        }
    
        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
    
        return (
            <div>
                <Header />
                <Nav />
                <div className="row">
                    <div className="col s9 offset-s3">
                        <h1>{user.name}</h1>
                        <ul>{mappedTweets}</ul>
                        
                    </div>
                </div>        
            </div>
        )
    }
};