import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import { PercAPI } from '../../../data/api'

const path = require('path')


export default class PercPad extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        console.log("Rendering PercPad")
        console.log(this.props.note)
        
        return (            
            <Row>
                <Input s={6} label="Threshold Velocity" value={`${this.props.note.threshold}`} />
                <Input s={6} label="Maximum Input Velocity" value={"127"} />
                <Input s={6} label="Minimum Output Velocity" value={`${this.props.note.min_vel}`}/>
                <Input s={6} label="Maximum Output Velocity" value={`${this.props.note.max_vel}`}/>
                <Input s={6} 
                    type='select' 
                    label="MIDI Port" 
                    value={`${this.props.note.port}`}>
                        <option value="0" disabled>Select the MIDI port</option>
                        <option value="berdrums 1">berdrums 1</option>
                        <option value="berdpad 0">berdpad 0</option>
                        <option value="berdcajon 0">berdcajon 0</option>
                </Input>
                <Input s={6} 
                    type='select' 
                    label="MIDI Channel" 
                    value={`${this.props.note.channel}`}>
                        <option value="0" disabled>Select the MIDI channel</option>
                        <option value="1">Channel 0</option>
                        <option value="2">Channel 1</option>
                        <option value="3">Channel 2</option>
                </Input>
            </Row>                                    
        )
    }     
};