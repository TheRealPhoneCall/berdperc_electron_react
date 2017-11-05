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

        // collection objects
        this.perc_col_obj = null
        this.perc_col_rxdb = null

        // default db data:
        this.default_percs = null
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
            // initiate PercCollection
            await this.initPercCollection()    

        } catch (err) {
            console.log("error in db/percussion creation:", err)
        }

        console.log("db and collection created:", this.db, this.perc_collection)
        return this.db
    }

    getDB(){
        return this.db
    }

    async initPercCollection(){
        console.log('creating percussions collection..')
        this.perc_col_obj = new PercCollection(this.db, 'percussions', 
                                              'perc', percussionSchema)
        this.perc_col_rxdb = await this.perc_col_obj.initAndGetCol()  
        console.log("Percussions obj & rxdb:", this.perc_col_obj, 
                    this.perc_col_rxdb)                                    
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
            this.collection = this.db.collections[this.name]
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
        console.log('inserting doc:');
        console.dir(doc);
        const inserted_doc = await this.collection.insert(doc);
        console.log("inserted doc:", inserted_doc)
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
                    console.log("Error 409 - document already added.", err)
                } else {
                    console.log("Error in adding default doc", err)
                }
            }
        }
    }
}

export class PercCollection extends RxDBCollection{
    constructor(db, col_name, col_slug, col_schema){
        super(db, col_name, col_slug, col_schema, PercAPI)
        this.db = db
        this.perc_col_rxdb = null 
        this.default_percs = null
    }

    async initAndGetCol(){
        this.perc_col_rxdb = await super.initAndGetCol()
        console.log("PercCollection.initAndGetCol:", this.perc_col_rxdb, 
                    this.db.collections.percussions)
        return this.perc_col_rxdb
    }

    async getCol(){
        // this.perc_col_rxdb = this.db.collections.percussions
        // console.log("PercCollection.getCol:", this.perc_col_rxdb)
        this.perc_col_rxdb = this.db.collections.percussions
        console.log("PercCollection.getCol:", this.perc_col_rxdb)
        return this.perc_col_rxdb
    }

    syncCol(){
        // sync
        super.syncCol()
    }

    
}


