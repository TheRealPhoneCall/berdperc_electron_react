import React from 'react';
import { Link } from 'react-router-dom';

import PercAPI from '../../data/api'

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
        return (
            <div className="col s9">
                <div className="col s12">
                    <img src={img_src} className="z-depth-4 responsive-img"/>
                </div>
                
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Config</span>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a className="active" href="#tab1">Hi-Hat</a></li>
                                    <li className="tab"><a href="#tab2">Snare</a></li>
                                    <li className="tab"><a href="#tab3">Kick</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="tab1">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input placeholder="Input threshold velocity" id="threshold" type="text" className="validate"/>
                                            <label for="threshold">Threshold</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input placeholder="Input minimum velocity" id="min_vel" type="text" className="validate"/>
                                            <label for="min_vel">Min Velocity</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input placeholder="Input maximum velocity" id="max_vel" type="text" className="validate"/>
                                            <label for="max_vel">Max Velocity</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <select>
                                                <option selected disabled value="">Choose the channel</option>
                                                <option value="0">Channel 0</option>
                                                <option value="1">Channel 1</option>
                                                <option value="2">Channel 2</option>
                                            </select>
                                            <label>Channel</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <select>
                                                <option selected disabled value="">Choose the MIDI port</option>
                                                <option value="berddrums 0">berddrums 0</option>
                                            </select>
                                            <label>MIDI Port</label>
                                        </div>                                        
                                    </div>
                                    
                                </div>
                                <div id="tab2">Snare</div>
                                <div id="tab3">kick</div>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href="#">Run</a>
                            <a href="#">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }     
};