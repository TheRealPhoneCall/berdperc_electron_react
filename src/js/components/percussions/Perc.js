import React from 'react';
import { Link } from 'react-router-dom';

const path = require('path')

export default class Perc extends React.Component {
    render() {
        console.log("Percussion Component Rendered")
        const perc = this.props.perc
        const img_src = path.join(__dirname, "../../../assets/images/", perc.image) 
        console.log(img_src)
        return (
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={img_src}/>
                        <span className="card-title">{perc.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{perc.html_description}</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/perc/${perc.id}/run`} className="btn waves-effect waves-light">Run</Link>
                        <Link to={`/perc/${perc.id}/edit`} className="btn waves-effect waves-light">Edit</Link>
                    </div>
                </div>
            </div>
        )
    }     
};