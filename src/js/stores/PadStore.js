import { observable, action, computed } from "mobx"
import { PadAPI } from "../../data/json_service"

class Pad {
  @observable id
  @observable name
  @observable pad_type

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.pad_type = obj.pad_type
  }
}

class PadStore {
  @observable pads_metas = []
  @observable pad_meta_id = null
  @observable config_pad_map = {}
  @observable current_pad = {
    pad: "pad0",
    pad_hit: null,
    notes: []
  }
  @observable pad_hit_class = ""

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

  // // rxdb:
  // @observable col_obj = null
  // @observable col_rxdb = null
  // @observable db = null

  // @action setCollection = (db_obj) => {
  //   this.col_obj = db_obj.config_col_obj
  //   this.col_rxdb = db_obj.config_col_rxdb
  //   this.db = db_obj.db
  // }
  

}

const pad_store = new PadStore
export default pad_store