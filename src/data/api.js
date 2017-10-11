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
  
  export default PercAPI