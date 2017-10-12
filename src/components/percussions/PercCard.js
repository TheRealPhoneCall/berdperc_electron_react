import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import PercAPI from '../../data/api'
import PercPad from './PercPad'

const path = require('path')


export default class PercCard extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        console.log("Rendering Percussion Card Component")
        const perc = this.props.perc
        console.log(perc)
        
        const img_src = path.join(__dirname, "../../images/", perc.image_front) 
        console.log(img_src)
        const midiPortSelectorOptions = [
            "Select the MIDI port", "berddrums 0", "berdpad 0", "berdcajon 0"
        ]

        const midiChannelSelectorOptions = [
            "Select the MIDI channel", "Channel 0", "Channel 1", "Channel 2", "Channel 3"
        ]
        
        return (
            <Col s={9}>
                <Col s={12}>
                    <img src={img_src} className="z-depth-4 responsive-img"/>
                </Col>
                
                <Col s={12}>
                    <Row>
                        <Tabs className='tab-demo z-depth-1'>
                            <Tab title="Hi-Hat" active>
                                <PercPad key={0} />
                            </Tab>
                            <Tab title="Snare">
                                <PercPad key={1} />
                            </Tab>
                            <Tab title="Kick">
                                <PercPad key={2} />
                            </Tab>
                        </Tabs>
                    </Row>
                </Col>
            </Col>
        )
    }     
};