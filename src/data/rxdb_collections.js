import RxDB from 'rxdb'
import 'babel-polyfill'
import db_password from '../../.keys/passwords'

// import db/json schemas/services:
import { percSchema, songSchema, 
         mapListSchema, configSchema } from "./rxdb_schema"
import { PercAPI, SongsAPI, 
         MidiListAPI, ConfigFileAPI } from "./json_service"

console.log('hostname: ' + window.location.hostname);
const syncURL = 'http://' + window.location.hostname + ':10102/';


export class RxDBCollection{
    constructor(db, col_name, col_slug, col_schema, col_api){
        this.db = db
        this.col_name = col_name
        this.col_slug = col_slug
        this.col_schema = col_schema
        this.col_api = col_api
        this.collection = null
        this.default_docs = null      
    }

    async initAndGetCol(){
        console.log("Initialize RxDBCollection for " + this.col_name)
        try{
            this.collection = await this.db.collection({
                name: this.col_name,
                schema: this.col_schema
            })

            // initialize default collection docs:
            this.getDefaultDocsJSON(this.col_api)
            this.addDefaultDocs()
        } catch(err){
            console.log(`error in ${this.col_name} collection creation: ${err}`)
        }
        return this.collection
    }

    async getCol(){
        console.log("RxDBCollection.getCol()")
        try{
            this.collection = this.db.collections[this.col_name]
            if (!this.collection){ // if null
                this.collection = await this.initAndGetCol()
            }
        } catch (err){
            console.log("Error retrieving collection object:", err)
            this.collection = await this.initAndGetCol()
            console.log("Collection has been newly created:", 
                        this.collection)
        }
        
        return this.collection
    }

    syncCol(){
        console.log('starting syncing for ' + this.col_name)
        this.collection.sync({
            remote: syncURL + this.col_slug + '/'
        });
        console.log(this.col_name + ' collection:', this.collection)
    }

    async insertDoc(doc){
        const inserted_doc = await this.collection.insert(doc);
        return inserted_doc
    }

    getDefaultDocsJSON(CollectionAPI){
        this.default_docs = CollectionAPI.all()
        console.log(this.default_docs)
        return this.default_docs
    }

    async addDefaultDocs(){
        for (let doc of this.default_docs) {
            try{
                let insert_promise = await this.collection.insert(doc)
                console.log("Adding document:", insert_promise, doc)
            } catch (err){
                if (err.status == 409){
                    // document is already added
                    // console.log("Error 409 - document already added.", err)
                } else {
                    console.log("Error in adding default doc", err)
                }
            }
        }
    }
}

export class PercCollection extends RxDBCollection{
    constructor(db){
        const col_name = 'percussions'
        const col_slug = 'perc'
        const col_schema = percSchema

        super(db, col_name, col_slug, col_schema, PercAPI)
        this.db = db
        this.col_rxdb = null 
        this.default_percs = null
    }

    async initAndGetCol(){
        this.col_rxdb = await super.initAndGetCol()
        console.log("PercCollection.initAndGetCol:", this.col_rxdb)
        return this.col_rxdb
    }

    async getCol(){
        return this.col_rxdb
    }

    syncCol(){
        // sync
        super.syncCol()
    }
    
}

export class SongCollection extends RxDBCollection{
    constructor(db){
        const col_name = 'songs3'
        const col_slug = 'song3'
        const col_schema = songSchema

        super(db, col_name, col_slug, col_schema, SongsAPI)
        this.db = db
        this.col_rxdb = null 
    }

    async initAndGetCol(){
        this.col_rxdb = await super.initAndGetCol()
        console.log("SongCollection.initAndGetCol:", this.col_rxdb)
        return this.col_rxdb
    }

    getCol(){
        return this.col_rxdb
    }

    syncCol(){
        // sync
        super.syncCol()
    }
    
}

export class MapListCollection extends RxDBCollection{
    constructor(db){
        const col_name = 'maplists1'
        const col_slug = 'maplist1'
        const col_schema = mapListSchema

        super(db, col_name, col_slug, col_schema, MidiListAPI)
        this.db = db
        this.col_rxdb = null 
    }

    async initAndGetCol(){
        this.col_rxdb = await super.initAndGetCol()
        console.log("MapListCollection.initAndGetCol:", this.col_rxdb)
        return this.col_rxdb
    }

    getCol(){
        return this.col_rxdb
    }

    syncCol(){
        // sync
        super.syncCol()
    }
    
}

export class ConfigCollection extends RxDBCollection{
    constructor(db){
        const col_name = 'configs2'
        const col_slug = 'config2'
        const col_schema = configSchema()

        // assume perc_slug = "berdperc_v1" for now
        super(db, col_name, col_slug, col_schema, ConfigFileAPI)
        this.db = db
        this.col_rxdb = null 
    }

    async initAndGetCol(){
        this.col_rxdb = await super.initAndGetCol()
        console.log("ConfigCollection.initAndGetCol:", this.col_rxdb)
        return this.col_rxdb
    }

    getCol(){
        return this.col_rxdb
    }

    syncCol(){
        // sync
        super.syncCol()
    }
    
}