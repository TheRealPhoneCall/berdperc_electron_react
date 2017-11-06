import { observable, action, computed } from "mobx"
import { PercAPI, SongsAPI } from "../../data/json_service"

class Song {
  @observable id 
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class SongStore {
  @observable songs = []
  @observable filtered = []
  @observable id = null
  
  @computed get filtered_song() {
    var matchesFilter = new RegExp(this.filtered, "i")
    return this.todos.filter(song => !this.filtered || matchesFilter.test(song.value))
  }

  @computed get current_song() {
    const idx = this.songs.findIndex(song => song.id === this.id)
    const song = this.songs[idx]
    return song
  }

  @action setID = (id) => {
    this.id = parseInt(id)
  }

  // @action fetchSongs = () => {
  //   this.songs = SongsAPI.all()
  // }

  // rxdb:
  @observable col_obj = {}
  @observable col_rxdb = {}
  @observable docs_rxdb = []
  @observable db = null

  @action setCollection = (db_obj) => {
    this.col_obj = db_obj.song_col_obj
    this.col_rxdb = db_obj.song_col_rxdb
    this.db = db_obj.db

    this.col_rxdb.find().exec() // <- find all documents
      .then(documents => { 
        this.docs_rxdb = documents
        this.songs = documents
      })
  }
}

const store = new SongStore
export default store