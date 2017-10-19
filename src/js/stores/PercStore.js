import { observable, action, computed } from "mobx"
import { PercAPI } from "../../data/api"

class Perc {
  @observable id
  @observable name
  @observable html_description
  @observable image
  @observable image_front
  @observable logo
  @observable default_map
  @observable pads

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.html_description = obj.html_description
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

  @action fetchPercs = () => {
    this.percs = PercAPI.all()
  }

}

const store = new PercStore
export default store