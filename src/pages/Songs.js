import React from 'react';
import jsonfile from 'jsonfile'

import Songs from '../components/percussions/Songs';

import { ConfigAPI, SongsAPI } from '../data/api'

const utils = require('../utils')


export default class Home extends React.Component {
    
  render() {
    console.log("Home Page Rendered!")
    const genre = SongsAPI.get(
        parseInt(this.props.match.params.id, 10)
    )

    const configs = ConfigAPI.all_configs(genre)
    console.log("Configs: ", configs)

    return (
      <div className="col s12">
        <h2>{genre}</h2>
        <Songs songs={configs} />
      </div>
    )
  }     
};