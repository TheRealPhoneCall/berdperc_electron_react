import RxDB from 'rxdb'
import 'babel-polyfill'
import db_password from '../../.keys/passwords'
import jsonfile from 'jsonfile'
import fs from 'fs'
import path from 'path'

// import db schemas:
import { percussionSchema } from "./rxdb_schema"


// activate pouchdb adapters
RxDB.plugin(require('pouchdb-adapter-websql'));
RxDB.plugin(require('pouchdb-adapter-http'));

console.log('hostname: ' + window.location.hostname);
const syncURL = 'http://' + window.location.hostname + ':10102/';

export default class BerdPercDB { 
    constructor(db_name, adapter){
        this.db_name = db_name
        this.apadter = adapter
        this.database = null
        this.collection = null
    }

    async createDB(){
        // create if not yet created
        this.database = await RxDB.create({
                name: this.db_name,
                adapter: this.apadter,
                password: db_password
            })
            .then( (db) =>{
                console.log('creating percussions collection..')
                this.database = db
                this.collection = db.collection({
                    name: 'percussions',
                    schema: percussionSchema
                })
                return this.collection
            })
            .then( (col) => {
                // sync
                console.log('starting sync')
                this.database.percussions.sync({
                    remote: syncURL + 'perc/'
                });
                console.log('percussion collection:', col)

                return this.col
            })
            .then( (col) => {
                // add default perc
                console.log('add default perc')
                this.addPerc()
            })
            .catch( (err) => {
                console.log("error in database/percussion creation:", err)
            });

        console.log("database and collection created:", this.database, this.collection)
        return this.database
    }

    getDB(){
        return this.database
    }

    getPercsJson(){
        const filePath = path.join(__dirname, "./percussions.json")
        const object = jsonfile.readFileSync(filePath)        
        console.log(object)
        return object;
    }

    addPerc(){
        const obj = {
            "name": "berdcajon v1",
            "slug": "berdcajon_v1",
            "description": "An innovative electronic cajon, with silent pads and configurable by the control panel and by the berdperc software.",
            "image": "berdcajon_v1.png",
            "image_front": "berdcajon_v1_front.png",
            "logo": "",
            "default_map": "ad_rock.json",
            "pads": [
                {"name": "pad0", "pad_type": "analog"},
                {"name": "pad1", "pad_type": "analog"},
                {"name": "pad2", "pad_type": "analog"},
                {"name": "pad3", "pad_type": "analog"},
                {"name": "pad4", "pad_type": "analog"},
                {"name": "pad5", "pad_type": "analog"}
            ]
        };
        console.log('inserting perc:');
        console.dir(obj);
        this.database.percussions.insert(obj);
        return this.database.percussions
    }


}
