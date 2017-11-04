import RxDB from 'rxdb'
import 'babel-polyfill'
import db_password from '../../.keys/passwords'
import jsonfile from 'jsonfile'
import fs from 'fs'
import path from 'path'

// import db/json schemas/services:
import { percussionSchema } from "./rxdb_schema"
import { PercAPI } from "./json_service"

// activate pouchdb adapters
RxDB.plugin(require('pouchdb-adapter-websql'));
RxDB.plugin(require('pouchdb-adapter-http'));

console.log('hostname: ' + window.location.hostname);
const syncURL = 'http://' + window.location.hostname + ':10102/';

export default class BerdPercDB { 
    constructor(db_name, adapter){
        this.db_name = db_name
        this.apadter = adapter
        this.db = null
        this.collection = null

        this.perc_collection = null

        // default db data:
        this.default_percs = null
    }

    async createDB(){
        // create if not yet created
        try{
            this.db = await RxDB.create({
                name: this.db_name,
                adapter: this.apadter,
                password: db_password
            })

            this.perc_collection = await this.getOrCreatePerc()
        } catch (err) {
            console.log("error in db/percussion creation:", err)
        }

        console.log("db and collection created:", this.db, this.perc_collection)
        return this.db
    }

    getDB(){
        return this.db
    }

    async getOrCreatePerc(){
        console.log('creating percussions collection..')
        let perc_col = await new PercCollection(this.db, 'percussions', 
                                          'perc', percussionSchema)
        perc_col = await perc_col.getCol()
        console.log("collection created from db class:", perc_col)                
        // console.log('add default percs')
        // this.default_percs = perc_col.getDefaultPercsJSON()
        // perc_col.addDefaultPercs()
        // perc_col.syncCol()
        return perc_col
    }


}

export class RxDBCollection{
    constructor(db, col_name, col_slug, col_schema, col_api){
        this.db = db
        this.col_name = col_name
        this.col_slug = col_slug
        this.col_schema = col_schema
        this.col_api = col_api
        this.collection = null
        this.default_docs = null
        this.initAndGetCol()
      
    }

    async initAndGetCol(){
        console.log("RxDBCollection for " + this.col_name)
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
        console.log(this.collection)
        return this.collection
    }

    async getCol(){
        if (this.collection) {
            console.log("RxDBCollection:", this.collection)
        } else {
            this.collection = await this.initAndGetCol()
            console.log("RxDBCollection:", this.collection)
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
        console.log('inserting doc:');
        console.dir(doc);
        const inserted_doc = await this.collection.insert(doc);
        return inserted_doc
    }

    getDefaultDocsJSON(CollectionAPI){
        this.default_docs = CollectionAPI.all()
        console.log(this.default_docs)
        return this.default_docs
    }

    addDefaultDocs(){
        for (let doc of this.default_docs) {
            console.log(doc)
            this.collection.insert(doc)
        }
    }
}

export class PercCollection extends RxDBCollection{
    constructor(db, col_name, col_slug, col_schema){
        super(db, col_name, col_slug, col_schema, PercAPI)
        this.collection = null 
        this.default_percs = null
    }

    async getCol(){
        this.collection = await super.getCol()
        console.log("PercCollection", this.collection)
        return this.collection
    }

    syncCol(){
        // sync
        super.syncCol()
    }

    
}


