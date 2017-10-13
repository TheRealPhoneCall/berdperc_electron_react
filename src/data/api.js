import jsonfile from 'jsonfile'
import fs from 'fs'
import path from 'path'

const PercAPI = {
    percussions: function() {
        const object = jsonfile.readFileSync("./src/data/percussions.json")
        console.log(object)
        return object;
    },
    all: function() { 
        return this.percussions()
    },
    get: function(id) {
      const isPerc = p => p.id === id
      return this.percussions().find(isPerc)
    }
}

const MidiMapAPI = {
    midi_map: function(file) {
        const object = jsonfile.readFileSync(`./src/data/${file}`)
        console.log(object)
        return object;
    },
    all: function(file) { 
        return this.midi_map(file)
    },
    get: function(id) {
      const isMap = p => p.id === id
      return this.midi_map().find(isMap)
    }
}

const ConfigAPI = {
    configs: function(genre){
        var configs = []
        const padMapPath = path.join(__dirname, "../../settings/pad_maps") 
        console.log(padMapPath)
        const dir = fs.readdirSync(padMapPath)
        // loop through file system
        console.log(dir)
        // console.log(dir)
        for(let filePath of dir) {                
            const jsonFilePath = `${padMapPath}/${filePath}`
            const object = jsonfile.readFileSync(`${jsonFilePath}`)
            console.log(object, genre)
            if (object.genre == genre) {
                configs.push(object)   
            }                             
        }
        
        console.log(configs)
        return configs
    },
    all_configs: function(genre){
        return this.configs(genre)
    },
    config: function(file) {
        const object = jsonfile.readFileSync(`./settings/pad_maps/${file}`)
        console.log(object)
        return object;
    },
    all: function(file) { 
        return this.config(file)
    },
    get: function(id) {
      const isConfig = p => p.id === id
      return this.config().find(isConfig)
    }
}

const SongsAPI = {
    music_lib: function() {
        const object = jsonfile.readFileSync(`./src/data/music_library.json`)
        console.log(object.genres)
        return object.genres;
    },
    all: function() { 
        return this.music_lib()
    },
    get: function(id) {
      const isConfig = p => p.id === id
      return this.music_lib().find(isConfig)
    }
}
  

export { PercAPI, MidiMapAPI, ConfigAPI, SongsAPI }