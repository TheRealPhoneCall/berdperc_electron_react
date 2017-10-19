import { observable, computed } from "mobx"
import { PercAPI } from "../../data/api"

export class PercStore {
  @observable percs = []
  @observable id = null
  
  @computed get getPerc() {
    const idx = this.percs.findIndex(perc => perc.id === this.id)
    const perc = this.percs[idx]
    return perc
  }

  fetchPercs() {
    this.percs = PercAPI.all()
  }
}

export default new PercStore