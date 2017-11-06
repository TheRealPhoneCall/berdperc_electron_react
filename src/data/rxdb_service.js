import RxDB from 'rxdb'
import 'babel-polyfill'
import db_password from '../../.keys/passwords'

// activate pouchdb adapters
RxDB.plugin(require('pouchdb-adapter-websql'));
RxDB.plugin(require('pouchdb-adapter-http'));

// import collections:
import { PercCollection, SongCollection,
         MapListCollection, ConfigCollection } from "./rxdb_collections"

export default class BerdPercDB { 
    constructor(db_name, adapter){
        this.db_name = db_name
        this.apadter = adapter
        this.db = null
        this.collection = null

        // collection objects
        this.perc_col_obj = null
        this.perc_col_rxdb = null
        this.song_col_obj = null
        this.song_col_rxdb = null
        this.map_list_col_obj = null
        this.map_list_col_rxdb = null
        this.config_col_obj = null
        this.config_col_rxdb = null
    }

    async createDB(){
        // create if not yet created
        try{
            console.log("Creating DB...")
            this.db = await RxDB.create({
                name: this.db_name,
                adapter: this.apadter,
                password: db_password
            })
            
            console.log(this.db)
            // initiate collections
            await Promise.all([
                this.initPercCollection(),
                this.initSongCollection(),
                this.initMapListCollection(),
                this.initConfigCollection()
            ]);

        } catch (err) {
            console.log("error in db/percussion creation:", err)
        }

        console.log("db and collection created:", this.db)
        return this.db
    }

    getDB(){
        return this.db
    }

    async initPercCollection(){
        console.log('Creating percussions collection..')
        this.perc_col_obj = new PercCollection(this.db)
        this.perc_col_rxdb = await this.perc_col_obj.initAndGetCol()  
        console.log("Percussions obj & rxdb:", this.perc_col_obj, 
                    this.perc_col_rxdb)                                    
        return {
            col_obj: this.perc_col_obj,
            col_rxdb: this.perc_col_rxdb
        } 
    }

    async initSongCollection(){
        console.log('Creating songs collection..')
        this.song_col_obj = new SongCollection(this.db)
        this.song_col_rxdb = await this.song_col_obj.initAndGetCol()  
        console.log("Songs obj & rxdb:", this.song_col_obj, 
                    this.song_col_rxdb)          
        return {
            col_obj: this.song_col_obj,
            col_rxdb: this.song_col_rxdb
        }                           
    }

    async initMapListCollection(){
        console.log('Creating map_lists collection..')
        this.map_list_col_obj = new MapListCollection(this.db)
        this.map_list_col_rxdb = await this.map_list_col_obj.initAndGetCol()  
        console.log("MapLists obj & rxdb:", this.map_list_col_obj, 
                    this.map_list_col_rxdb) 
        return {
            col_obj: this.map_list_col_obj,
            col_rxdb: this.map_list_col_rxdb
        }                                  
    }

    async initConfigCollection(){
        console.log('Creating configs collection..')
        this.config_col_obj = new ConfigCollection(this.db)
        this.config_col_rxdb = await this.config_col_obj.initAndGetCol()  
        console.log("Configs obj & rxdb:", this.config_col_obj, 
                    this.config_col_rxdb)   
        return {
            col_obj: this.config_col_obj,
            col_rxdb: this.config_col_rxdb
        }                                 
    }

}



