import React from 'react';

export default class MobX extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }
    render() {
        const { user, tweets } = this.props; 
        console.log("MobX Page Rendered!")
        if (!tweets.length) { 
            return (
                <div>
                    <h1>MobX Page</h1>                                        
                    <button onClick={this.fetchTweets.bind(this)} className="btn waves-effect waves-light">load tweets</button>
                </div>                
            )
        } 

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)

        return (
            <div>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>                           
            </div>
        )
    }     
};