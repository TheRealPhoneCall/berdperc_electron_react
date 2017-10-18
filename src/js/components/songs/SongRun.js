import React from 'react';
import { Link } from 'react-router-dom';

import { PercAPI } from '../../../data/api'

import PercCard from '../percussions/PercCard'
import PercSounds from '../percussions/PercSounds'

const path = require('path')


export default class PercRun extends React.Component {
    constructor() {
        super()

    }

    handleStopClick(){

    }

    handlePadHighlight(){
        
    }
    
    render() {
        console.log("Rendering Percussion Run Component")
        const perc = PercAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        console.log(perc)
        
        const img_src = path.join(__dirname, "../../../assets/images/", perc.image_front) 
        console.log(img_src)
        return (
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={img_src}/>
                        <span className="card-title"><h2>{perc.name}</h2></span>
                    </div>
                    <div className="card-content">
                        <p>{perc.html_description}</p>
                    </div>
                    <div className="card-action">
                        <Link to='/' className="btn waves-effect waves-light">Stop</Link>
                    </div>
                </div>
            </div>
        )
    }     
};