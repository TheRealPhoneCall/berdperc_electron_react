import jsonfile from 'jsonfile'
import fs from 'fs'
import path from 'path'

const PercAPI = {
    percussions: function() {        
        const filePath = path.join(__dirname, "./percussions.json")
        const object = jsonfile.readFileSync(filePath)        
        console.log(object)
        return object;
    },
    all: function() { 
        return this.percussions()
    },
    get: function(id) {
        const isPerc = p => p.id === id
        return this.percussions().find(isPerc)
    }, 
    set: function(){

    },
    save: function(){

    }
}

const MidiMapAPI = {
    midi_map: function(file) {
        const filePath = path.join(__dirname, `./${file}`)
        const object = jsonfile.readFileSync(filePath)
        console.log(object)
        return object;
    },
    all: function(file) { 
        return this.midi_map(file)
    },
    get: function(id) {
        const isMap = p => p.id === id
        return this.midi_map().find(isMap)
    },
    save: function(){
        
    }
}

const ConfigAPI = {
    configs: function(perc_slug, genre){
        var configs = []
        const padMapPath = path.join(__dirname, `../../settings/pad_maps/${perc_slug}`) 
        const dir = fs.readdirSync(padMapPath)
        // loop through file system
        for(let filePath of dir) {                
            const jsonFilePath = `${padMapPath}/${filePath}`
            const object = jsonfile.readFileSync(jsonFilePath)
            if (genre){
                console.log(object, genre)
                if (object.genre == genre) {
                    configs.push(object)   
                }  
            } else {
                configs.push(object)
            }
                                       
        }
        
        console.log(configs)
        return configs
    },
    configs_by_genre: function(perc_slug, genre){
        return this.configs(perc_slug, genre)
    },
    all_configs: function(perc_slug){
        return this.configs(perc_slug)
    },
    get_config_content: function(perc_slug, file) {
        const filePath = path.join(__dirname, `../../settings/pad_maps/${perc_slug}/${file}`)
        const object = jsonfile.readFileSync(filePath)
        return object;
    }
}

const SongsAPI = {
    music_lib: function() {
        const filePath = path.join(__dirname, `./music_library.json`)
        const object = jsonfile.readFileSync(filePath)
        
        console.log(object.genres)
        return object.genres;
    },
    all: function() { 
        return this.music_lib()
    },
    get: function(id) {
        const isConfig = p => p.id === id
        return this.music_lib().find(isConfig)
    },
    save: function(){
        
    }
}
  

export { PercAPI, MidiMapAPI, ConfigAPI, SongsAPI }