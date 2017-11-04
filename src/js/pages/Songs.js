import React from 'react'
import jsonfile from 'jsonfile'
import { inject, observer } from 'mobx-react'

import SongsTable from '../components/songs/SongsTable'

import { ConfigAPI, SongsAPI } from '../../data/json_service'

@inject('song_store', 'config_store')
@observer
export default class Songs extends React.Component {

  componentWillMount(){
    const default_perc = "berdcajon_v1"
    const { config_store, song_store } = this.props
    config_store.fetchConfigs(default_perc)    
    song_store.fetchSongs()
    song_store.setID(this.props.match.params.id)
    config_store.fetchConfigsByGenre(default_perc, song_store.current_song.genre)
  }

  render() {
    console.log("Song Page Rendered!")
    const { config_store, song_store } = this.props
    const genre = song_store.current_song
    const default_perc = "berdcajon_v1"
    const configs = config_store.configs_by_genre
    console.log("Configs: ", configs)

    return (
      <div className="col s12">
        <h2>{genre.genre}</h2>
        <SongsTable history={{}} />
      </div>
    )
  }     
};