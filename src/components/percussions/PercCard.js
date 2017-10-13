import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import { PercAPI, ConfigAPI } from '../../data/api'
import PercPad from './PercPad'
import PercPadTab from './PercPadTab'

const path = require('path')


export default class PercCard extends React.Component {
    constructor(props) {
        super(props)
        const json_file = this.props.json_file
        const config_map =  ConfigAPI.all(json_file)
        this.state = {
            config_map: config_map,
            json_file: json_file,
            map: config_map.maps[0],
            pad: "pad0"
        }

        // this.handlePadClick = this.handlePadClick.bind(this);
    }

    handlePadClick(event) {
        const pad = event.target.className.split(" ")[1]
        console.log(pad);

        this.setState({
            pad: pad
        })
    }
    
    render() {
        console.log("Rendering Percussion Card Component")
        const perc = this.props.perc
        const config_map = this.state.config_map        
        const img_src = path.join(__dirname, "../../images/", perc.image_front) 
        // TODO: Make map changing as states!!! 
        // const default_map = config_map.maps[0]
        // console.log(default_map)
        const map = this.state.map
        const current_pad = this.state.map[this.state.pad]        
        const clickHandler = this.handlePadClick.bind(this)
        
        return (
            <Col s={9}>
                <Col s={12} className="pad-img">
                    <img src={img_src} className="z-depth-4 responsive-img"/>
                    {
                        perc.pads.map(function (pad, i){
                            return (
                                <div key={i} className={`pads-${perc.slug} ${pad.name}`} onClick={clickHandler}>
                                    {/* <a href="#" onclick={clickHandler}></a> */}
                                </div>
                            )                            
                        })
                    }
                    
                </Col>
                
                <Col s={12}>
                    <Row>
                        <Tabs className='tab-demo z-depth-1'>
                            {
                                current_pad.notes.map(function (note, i){
                                    return (
                                        <Tab key={i} title={note.name} active>
                                            <PercPad key={i} note={note}/>
                                        </Tab>
                                    )
                                })
                            }
                        </Tabs>
                    </Row>
                </Col>
            </Col>
        )
    }     
};