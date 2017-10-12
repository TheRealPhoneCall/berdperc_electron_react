import React from 'react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'

import { GmAdMapAPI } from '../../data/api'

const path = require('path')


export default class PercSounds extends React.Component {
    constructor() {
        super()
        this.state = {
            midi_maps: GmAdMapAPI.all()
        }
    }
    render() {
        console.log("Rendering Percussion Sound Component")
        console.log(this.state.midi_maps)
        return (
            <div className="col s3">   
                <Collapsible>
                    {
                        this.state.midi_maps.map(function (midi_map, i){
                            return (
                                <CollapsibleItem key={i} header={midi_map.name}>
                                    <Collection>
                                        {
                                            midi_map.maps.map(function (note, j){
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
                
                    {/* <CollapsibleItem header='Hi-Hat' icon='filter_drama'>
                        <Collection className="collapsible-collection">
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                    <CollapsibleItem header='Second' icon='place'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Third' icon='whatshot'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem> */}
                </Collapsible>
            </div>
        )
    }     
};