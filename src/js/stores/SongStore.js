import { observable, computed } from "mobx"
import { PercAPI, SongsAPI } from "../../data/api"

class Song {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class SongStore {
  @observable songs = []
  @observable filtered = []
  @observable id = null
  
  @computed get filterSongs() {
    var matchesFilter = new RegExp(this.filtered, "i")
    return this.todos.filter(song => !this.filtered || matchesFilter.test(song.value))
  }

  @computed get getSong() {
    const idx = this.songs.findIndex(song => song.id === this.id)
    const song = this.songs[idx]
    return song
  }

  fetchSongs() {
    this.songs = SongsAPI.all()
  }
}

export default new SongStore