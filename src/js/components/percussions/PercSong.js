import React from 'react';
import { Link } from 'react-router-dom';

const path = require('path')


export default class PercSong extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log("Percussion Song Component Rendered")
        const img_src = path.join(__dirname, "../../../assets/images/", this.props.perc.image) 
        console.log(img_src)
        return (
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={img_src}/>
                        <span className="card-title">{this.props.perc.name}</span>
                    </div>
                    <div className="card-content">
                        {this.props.perc.html_description}
                    </div>
                    <div className="card-action">
                        {/* <button id="btn-berdcajon" className="btn waves-effect waves-light">Run</button> */}
                        <Link to="/perc/{this.props.perc.run_link}" className="btn waves-effect waves-light">Run</Link>
                        <Link to="/perc/{this.props.perc.edit_link}" className="btn waves-effect waves-light">Edit</Link>
                    </div>
                </div>
            </div>
        )
    }     
};