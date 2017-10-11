import React from 'react';
import { Link } from 'react-router-dom';


export default class Percussion extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log("Percussion Page Rendered")
        // TODO: GET PROPER FILE PATH!!
        const img_src = `file://C:/Users/Lenovo/Documents/_BERDWARE/7.0_BerDrums/version_electron/images/${this.props.perc.image}`
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
                        <Link to="/{this.props.perc.run_link}" className="btn waves-effect waves-light">Run</Link>
                        <Link to="/{this.props.perc.edit_link}" className="btn waves-effect waves-light">Configure</Link>
                    </div>
                </div>
            </div>
        )
    }     
};