import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import { PercAPI, ConfigAPI } from '../../../data/api'
import PercPad from './PercPad'
import { PyShell } from '../../utils'

const path = require('path')


export default class PercCard extends React.Component {
    constructor(props) {
        super(props)
        const json_file = this.props.json_file
        const config_map =  ConfigAPI.all(this.props.perc.slug, json_file)
        this.state = {
            config_map: config_map,
            json_file: json_file,
            map: config_map.maps[0],
            pad: "pad0",
            pad_hit: null,
            pad_hit_class: ""
        }
    }

    handlePadClick(event) {
        console.log(event.target.className)
        let pad = event.target.className.split(" ")[1]
        pad = pad.split("-")[1]
        console.log(pad);

        this.setState({pad})
    }

    handleRunClick(event) {
        console.log("handleRunClick")
        console.log(event.target)
        const json_file = `${this.state.config_map.name}.json`
        console.log(json_file)
        var pyshell = PyShell.start("COM5", "31250", json_file, "text")
        var self = this
        pyshell.on('message', (message) => {
            console.log(message)
            const pad_hit = parseInt(message.slice(-1));
            if (!isNaN(pad_hit)){
                const pad = "pad" + pad_hit
                console.log(pad_hit, pad)
                self.setState({pad_hit, pad, pad_hit_class: "pad-hit"})
                setTimeout(() => {
                    this.setState({ pad_hit_class: "" });
                }, 250);
            }            
        })
    }
    
    render() {
        console.log("Rendering Percussion Card Component")
        const perc = this.props.perc
        const config_map = this.state.config_map        
        const img_src = path.join(__dirname, "../../../assets/images/", perc.image_front) 
        const map = this.state.map
        const current_pad = this.state.map[this.state.pad] 
        const pad_hit = this.state.pad_hit
        const pad_hit_class = this.state.pad_hit_class  
        const clickHandler = this.handlePadClick.bind(this)
        
        return (
            <Col s={9}>
                <Col s={12} className="pad-img">
                    <img src={img_src} className="z-depth-4 responsive-img"/>
                    {
                        perc.pads.map((pad, i) => {
                            if (i == pad_hit){
                                return (
                                    <div key={i} className={`pads-${perc.slug} ${perc.slug}-${pad.name} ${pad_hit_class}`} onClick={clickHandler}></div>
                                )
                            } else {
                                return (
                                    <div key={i} className={`pads-${perc.slug} ${perc.slug}-${pad.name}`} onClick={clickHandler}></div>
                                )
                            }
                                                       
                        })
                    }
                </Col>
                
                <Col s={12}>
                    <Row>
                        <Tabs className='tab-demo z-depth-1'>
                            {
                                current_pad.notes.map((note, i) => {
                                    return (
                                        <Tab key={i} title={note.name} active>
                                            <PercPad key={i} note={note}/>
                                        </Tab>
                                    )
                                })
                            }
                        </Tabs>
                        <Button onClick={this.handleRunClick.bind(this)}
                                floating icon='send' className='dark_blue'/> 
                    </Row>
                </Col>
            </Col>
        )
    }     
};