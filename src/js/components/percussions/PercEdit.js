import React from 'react'
import { Link } from 'react-router-dom'

import { PercAPI } from '../../../data/api'

import PercCard from './PercCard'
import PercSounds from './PercSounds'

const path = require('path')

export default class PercEdit extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("Rendering Percussion Edit Component")    
        const perc_id = parseInt(this.props.match.params.id, 10)    
        const percs = PercAPI.all()
        const perc = percs[this.state.perc_id]
        console.log("component perc:", perc)
        
        const img_src = path.join(__dirname, "../../../assets/images/", perc.image) 
        console.log(img_src)
        return (
            <div id="bordered" className="section scrollspy">
                <div className="row">
                    <div id="page-title"><h2>{perc.name}</h2></div>
                    <div className="col s12">
                        <PercCard perc={perc} json_file={perc.default_map} />
                        <PercSounds perc={perc} />
                    </div>
                </div>
            </div>
            
        )
    }     
};