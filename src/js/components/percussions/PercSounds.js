import React from 'react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'

import { MidiMapAPI } from '../../../data/json_service'

const path = require('path')


export default class PercSounds extends React.Component {
    constructor() {
        super()
        this.state = {
            midi_maps: MidiMapAPI.all('gm_admap.json')
        }
    }
    render() {
        console.log("Rendering Percussion Sound Component")
        console.log(this.state.midi_maps)
        return (
            <div className="col s3">   
                <Collapsible>
                    {
                        this.state.midi_maps.map((midi_map, i) => {
                            return (
                                <CollapsibleItem key={i} header={midi_map.name}>
                                    <Collection>
                                        {
                                            midi_map.maps.map((note, j) => {
                                                return (
                                                    <CollectionItem key={j} note={note.note}>{note.name}</CollectionItem>
                                                )                                                
                                            })
                                        }
                                    </Collection>
                                </CollapsibleItem>
                            )
                        })
                    }                         
                </Collapsible>
            </div>
        )
    }     
};