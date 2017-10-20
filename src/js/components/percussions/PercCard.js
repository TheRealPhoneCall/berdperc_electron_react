import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Button, Input, Card, Row, Col, Tabs, Tab } from 'react-materialize'

import { PercAPI, ConfigAPI } from '../../../data/api'
import PercPad from './PercPad'
import { PyShell } from '../../utils'

const path = require('path')

@inject('perc_store', 'pad_store', 'config_store')
@observer
export default class PercCard extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     // pad: "pad0",
        //     // pad_hit: null,
        //     // pad_hit_class: ""
        // }
        // const { perc_store, pad_store, config_store } = this.props
    }

    componentWillMount(){
        const { perc, json_file, config_store, pad_store } = this.props
        // set and get config_content
        config_store.setConfigContent(perc.slug, json_file)
        const config_content = config_store.config_content   
        // set config_pad_map to default map (at index 0)
        pad_store.setConfigPadMap(config_content.maps, 0)
        pad_store.initCurrentPad("pad0")


    }

    handlePadClick(event) {
        // console.log(event.target.className)
        let pad_clicked = event.target.className.split(" ")[1]
        pad_clicked = pad_clicked.split("-")[1]
        // console.log(pad_clicked);
        this.props.pad_store.onPadClick(pad_clicked)
    }

    handleRunClick(event) {
        console.log("handleRunClick")
        // console.log(event.target)
        const { json_file, pad_store } = this.props
        // console.log(json_file)

        // TODO: set COM5 and Baudrate as form inputs!
        var pyshell = PyShell.start("COM5", "31250", json_file, "text")
        var self = this
        pyshell.on('message', (message) => {
            console.log(message)
            const pad_hit = parseInt(message.slice(-1));
            if (!isNaN(pad_hit)){
                // const pad = "pad" + pad_hit
                // console.log(pad_hit, pad)

                // self.setState({pad_hit, pad, pad_hit_class: "pad-hit"})
                // setTimeout(() => {
                //     this.setState({ pad_hit_class: "" });
                // }, 250);
                pad_store.onPadHit(pad_hit)
                // pad_store.setPadHitClass("pad_hit")
                // setTimeout(() => {
                //     pad_store.setPadHitClass("")
                // }, 250);
            }            
        })
    }
    
    render() {
        console.log("Rendering Percussion Card Component")
        // const perc = this.props.perc
        const { perc, json_file, config_store, pad_store } = this.props
        const img_src = path.join(__dirname, "../../../assets/images/", perc.image_front) 
        const config_content = config_store.config_content   
        const map = pad_store.config_pad_map
        const { pad, pad_hit, notes } = pad_store.current_pad
        const pad_hit_class = pad_store.pad_hit_class 
        const clickHandler = this.handlePadClick.bind(this)
        
        return (
            <Col s={9}>
                <Col s={12} className="pad-img">
                    <img src={img_src} className="z-depth-4 responsive-img"/>
                    {
                        perc.pads.map((pad_meta, i) => {
                            if (i == pad_hit){
                                return (
                                    <div key={i} className={`pads-${perc.slug} ${perc.slug}-${pad_meta.name} ${pad_hit_class}`} onClick={clickHandler}></div>
                                )
                            } else {
                                return (
                                    <div key={i} className={`pads-${perc.slug} ${perc.slug}-${pad_meta.name}`} onClick={clickHandler}></div>
                                )
                            }
                                                       
                        })
                    }
                </Col>
                
                <Col s={12}>
                    <Row>
                        <Tabs className='tab-demo z-depth-1'>
                            {
                                notes.map((note, i) => {
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