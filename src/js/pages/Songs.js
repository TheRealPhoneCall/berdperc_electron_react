import React from 'react';
import jsonfile from 'jsonfile'

import SongsTable from '../components/songs/SongsTable';

import { ConfigAPI, SongsAPI } from '../../data/api'


export default class Songs extends React.Component {

  render() {
    console.log("Home Page Rendered!")
    const genre = SongsAPI.get(
        parseInt(this.props.match.params.id, 10)
    )

    const configs = ConfigAPI.all_configs(genre.genre)
    console.log("Configs: ", configs)

    return (
      <div className="col s12">
        <h2>{genre.genre}</h2>
        <SongsTable songs={configs} history={{}} />
      </div>
    )
  }     
};