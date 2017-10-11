import React from 'react';
import { Link } from 'react-router-dom';

import PercAPI from '../../data/api'

import PercCard from './PercCard'
import PercSounds from './PercSounds'

const path = require('path')


export default class PercRun extends React.Component {
    constructor() {
        super()

    }
    // TODO: Learn how to initiate js elements/plugins
    initiateSelect(){
        const select = document.querySelector('select')
        select.material_select();
    }
    render() {
        console.log("Rendering Percussion Run Component")
        const perc = PercAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        console.log(perc)
        
        const img_src = path.join(__dirname, "../../images/", perc.image_front) 
        console.log(img_src)
        return (
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={img_src}/>
                        <span className="card-title">{perc.name}</span>
                    </div>
                    <div className="card-content">
                        {perc.html_description}
                    </div>
                    <div className="card-action">
                        {/* <button id="btn-berdcajon" className="btn waves-effect waves-light">Run</button> */}
                    </div>
                </div>
            </div>
        )
    }     
};