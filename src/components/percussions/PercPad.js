import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import { PercAPI } from '../../data/api'

const path = require('path')


export default class PercCard extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        
        return (            
            <Row>
                <Input s={6} label="Threshold Velocity" />
                <Input s={6} label="Maximum Input Velocity" />
                <Input s={6} label="Minimum Output Velocity" />
                <Input s={6} label="Maximum Output Velocity" />
                <Input s={6} 
                    type='select' 
                    label="MIDI Port" 
                    defaultValue="0">
                        <option value="0" disabled>Select the MIDI port</option>
                        <option value="1">berddrums 0</option>
                        <option value="2">berdpad 0</option>
                        <option value="3">berdcajon 0</option>
                </Input>
                <Input s={6} 
                    type='select' 
                    label="MIDI Channel" 
                    defaultValue="0">
                        <option value="0" disabled>Select the MIDI channel</option>
                        <option value="1">Channel 0</option>
                        <option value="2">Channel 1</option>
                        <option value="3">Channel 2</option>
                </Input>                                            
            </Row>                                    
        )
    }     
};