import { observable, action, computed } from "mobx"
import { MapAPI } from "../../data/json_service"

class MapList {
  @observable name
  @observable maps

  constructor(obj){
    this.name = obj.name
    this.maps = obj.maps
  }
}

class MapListStore {
  @observable maps = []

  @computed get pad_meta() {
    const idx = this.pads_metas.findIndex(pad => pad.id === this.pad_meta_id)
    this.pad_meta = this.pads_metas[idx]
    return this.pad_meta
  }

  @action fetchPadsMeta = (perc) => {
    this.pads_meta = perc.pads
  }

  @action onPadClick = (pad_clicked) => {
    this.current_pad = {
      pad: pad_clicked,
      pad_hit: null,
      notes: this.config_pad_map[pad_clicked].notes
    }
  }

  @action initCurrentPad = (init_pad) => {
    this.current_pad = {
      pad: init_pad,
      pad_hit: null,
      notes: this.config_pad_map[init_pad].notes
    }
  }

  @action onPadHit = (pad_hit) => {
    this.changeCurrentPad(pad_hit)
    this.setPadHitClass("pad-hit")
    setTimeout(() => {
        this.setPadHitClass("")
    }, 250);
  }

  @action changeCurrentPad = (pad_id) => {
    const pad_slug = `pad${pad_id}`
    this.current_pad = {
      pad: pad_slug,
      pad_hit: pad_id,
      notes: this.config_pad_map[pad_slug].notes
    }
  }

  @action setPadHitClass = (pad_hit_class_str) => {
    this.pad_hit_class = pad_hit_class_str
  }  

  @action setConfigPadMap = (config_pad_maps, map_id) => {
    this.config_pad_map = config_pad_maps[map_id]
  }    

  @action setPadMetaId = (id) => {
    this.pad_meta_id = parseInt(id)
  }

  @action addPad = (pad) => {
    this.pads_metas.push(pad)
  }

  

}

const pad_store = new PadStore
export default pad_store