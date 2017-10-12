import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'


import PercPad from './PercPad'


export default class PercPadTab extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        console.log("Rendering Percussion Pad Tab Component")
        const map = this.props.map
        console.log("map: ", map)
        const pad = map[this.props.default_pad];
        console.log("pad: ", pad)

        return (
            
            pad.notes.map(function (note, i){
                return (
                    <Tab key={i} title={note.name}>
                        <PercPad key={i} note={note}/>
                    </Tab>
                )
            })
            
        )
    }     
};