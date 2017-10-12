import React from 'react';
import { Link } from 'react-router-dom';

import PercAPI from '../../data/api'

import PercCard from './PercCard'
import PercSounds from './PercSounds'

const path = require('path')


export default class PercEdit extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log("Rendering Percussion Edit Component")
        const perc = PercAPI.get(
            parseInt(this.props.match.params.id, 10)
        )
        console.log(perc)
        
        const img_src = path.join(__dirname, "../../images/", perc.image) 
        console.log(img_src)
        return (
            <div id="bordered" class="section scrollspy">
                <div class="row">
                    <div id="page-title"><h2>{perc.name}</h2></div>
                    <div class="col s12">
                        <PercCard perc={perc} />
                        <PercSounds perc={perc} />
                    </div>
                </div>
            </div>
            
        )
    }     
};