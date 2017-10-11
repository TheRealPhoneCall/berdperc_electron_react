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
            <div class="col s3">                            
                <ul class="collapsible collapsible-accordion">
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Hi-Hat</a>
                        <div class="collapsible-body">
                            <ul class="collection">
                                <li class="active"><a href="pages/rock.html">Hi-Hat Open</a></li>
                                <li><a href="#">Hi-Hat Closed</a></li>
                                <li><a href="#">Hi-Hat Tip</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Snare</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Open Hit</a></li>
                                <li><a href="#">Closed Hit</a></li>
                                <li><a href="#">Tip</a></li>
                                <li><a href="#">Sidestick</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Kick</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Open Hit</a></li>
                                <li><a href="#">Closed Hit</a></li>
                                <li><a href="#">Tip</a></li>
                                <li><a href="#">Sidestick</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Tom 1</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Open Hit</a></li>
                                <li><a href="#">Closed Hit</a></li>
                                <li><a href="#">Tip</a></li>
                                <li><a href="#">Sidestick</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Tom 2</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Open Hit</a></li>
                                <li><a href="#">Closed Hit</a></li>
                                <li><a href="#">Tip</a></li>
                                <li><a href="#">Sidestick</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Floor Tom</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Open Hit</a></li>
                                <li><a href="#">Closed Hit</a></li>
                                <li><a href="#">Tip</a></li>
                                <li><a href="#">Sidestick</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Cymbal 1</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Ride</a></li>
                                <li><a href="#">Crash</a></li>
                                <li><a href="#">Bell</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="bold"><a class="collapsible-header waves-effect waves-teal">Cymbal 2</a>
                        <div class="collapsible-body">
                            <ul>
                                <li class="active"><a href="pages/rock.html">Ride</a></li>
                                <li><a href="#">Crash</a></li>
                                <li><a href="#">Bell</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>                        
            </div>
        )
    }     
};