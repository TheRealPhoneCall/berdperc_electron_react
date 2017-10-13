import jsonfile from 'jsonfile'

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
        const padMapPath = 'settings/pad_maps'
        fs.readdir(padMapPath, (err, dir) => {
            // loop through file system
            for(let filePath of dir) {
                jsonFilePath = `${padMapPath}/${filePath}`
                const object = jsonfile.readFileSync(`${jsonFilePath}`)
                configs.push(object)                
            }
        })
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
        const object = jsonfile.readFileSync(`./src/data/music_lib.json`)
        console.log(object)
        return object;
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