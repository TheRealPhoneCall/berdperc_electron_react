import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

import { PercAPI } from '../../../data/api'

import PercCard from './PercCard'
import PercSounds from './PercSounds'

import { getPerc, fetchPercs } from "../../actions/percsActions"

const path = require('path')

@connect((store) => {
    return {
      percs: store.percs.percs,
      perc: store.percs.perc
    };
})
export default class PercEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            perc_id: parseInt(this.props.match.params.id, 10)
        }
    }
    componentWillMount() {
        
        this.props.dispatch(getPerc(this.state.perc_id))
    }
    render() {
        console.log("Rendering Percussion Edit Component")        
        const { perc, percs } = this.props
        console.log(percs, perc)
        console.log("redux perc:", perc)
        const comp_perc = percs[this.state.perc_id]
        console.log("component perc:", comp_perc)
        
        const img_src = path.join(__dirname, "../../../assets/images/", comp_perc.image) 
        console.log(img_src)
        return (
            <div id="bordered" className="section scrollspy">
                <div className="row">
                    <div id="page-title"><h2>{comp_perc.name}</h2></div>
                    <div className="col s12">
                        <PercCard perc={comp_perc} json_file={comp_perc.default_map} />
                        <PercSounds perc={comp_perc} />
                    </div>
                </div>
            </div>
            
        )
    }     
};