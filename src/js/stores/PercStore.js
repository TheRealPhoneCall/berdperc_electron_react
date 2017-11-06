import { observable, action, computed } from "mobx"
import { PercAPI } from "../../data/json_service"

class Perc {
  @observable id
  @observable name
  @observable description
  @observable image
  @observable image_front
  @observable logo
  @observable default_map
  @observable pads

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.description = obj.description
    this.image = obj.image
    this.image_front = obj.image_front
    this.logo = obj.logo
    this.default_map = obj.default_map
    this.pads = obj.pads
  }
}

class PercStore {
  @observable percs = []
  @observable id = null
  @observable perc = {}
  
  @computed get getPerc() {
    const idx = this.percs.findIndex(perc => perc.id === this.id)
    this.perc = this.percs[idx]
    return this.perc
  }

  @action setId = (id) => {
    this.id = parseInt(id)
  }

  @action addPerc = (perc) => {
    this.percs.push(perc)
  }

  // @action fetchPercs = () => {
  //   this.percs = PercAPI.all()
  // }

  // rxdb:
  @observable col_obj = {}
  @observable col_rxdb = {}
  @observable docs_rxdb = []
  @observable db = null

  @action setCollection = (db_obj) => {
    this.col_obj = db_obj.perc_col_obj
    this.col_rxdb = db_obj.perc_col_rxdb
    this.db = db_obj.db

    this.col_rxdb.find().exec() // <- find all documents
      .then(documents => { 
        this.docs_rxdb = documents
        this.percs = documents
      })
  }

}

const store = new PercStore
export default store