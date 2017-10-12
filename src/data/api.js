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

const GmAdMapAPI = {
    midi_map: function() {
        const object = jsonfile.readFileSync("./src/data/gm_admap.json")
        console.log(object)
        return object;
    },
    all: function() { 
        return this.midi_map()
    },
    get: function(id) {
      const isMap = p => p.id === id
      return this.midi_map().find(isMap)
    }
  }
  

export { PercAPI, GmAdMapAPI }