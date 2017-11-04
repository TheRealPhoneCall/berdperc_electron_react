import { observable, action, computed } from "mobx"
import { ConfigAPI } from "../../data/json_service"

class Config {
  @observable id
  @observable name
  @observable plugin
  @observable plugin_map
  @observable description
  @observable used_for
  @observable default_map
  @observable maps

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.plugin = obj.plugin
    this.plugin_map = obj.plugin_map
    this.description = obj.description
    this.used_for = obj.used_for
    this.genre = obj.genre
    this.maps = obj.maps
  }
}

class Map {
  constructor(pads){
    pads.map((pad) => {
      this[pad.name] = {notes: []}
    })
  }
}

class ConfigStore {
  @observable id = null
  @observable configs = []  
  @observable configs_by_genre = []
  @observable config = {}
  @observable config_content = {}

  @computed get config_pad_maps() {
    return this.config_content.maps
  }

  @action fetchConfigsByGenre = (perc_slug, genre) => {
    this.configs_by_genre = ConfigAPI.configs_by_genre(perc_slug, genre)
  }

  @computed get getConfig() {
    const idx = this.configs.findIndex(config => config.id === this.id)
    this.config = this.configs[idx]
    return this.config
  }

  @action setConfigContent = (perc_slug, file) => {
    this.config_content = ConfigAPI.get_config_content(perc_slug, file)
  }  

  @action setId = (id) => {
    this.id = parseInt(id)
  }

  @action addConfig = (config) => {
    this.configs.push(config)
  }

  @action fetchConfigs = (perc_slug) => {
    this.configs = ConfigAPI.all_configs(perc_slug)
  }

}

const store = new ConfigStore
export default store