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
  

export { PercAPI, MidiMapAPI, ConfigAPI }