import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Table, Button } from 'react-materialize';

import { PyShell } from '../../utils'



export default class SongsTable extends React.Component {
    constructor() {
        super()
        this.state = {
            is_redirect: false,
            redirect_to: ""
        }
    }

    handleRunClick(e, json_file, id) {
        console.log("handleRunClick")
        console.log(e.target)
        console.log(json_file)
        // TODO: Make ID dynamic as well
        // this.props.history.push(`/songs/0/run/${json_file}/`)
        this.setState({is_redirect: true})
        this.setState({redirect_to: `/songs/0/run/${json_file}/`})
        // TODO: Make a logic based on success of the python call
        PyShell.arduino_std("COM5", "31250", json_file)
    }

    handleEditClick(e, json_file, id) {
        console.log("handleEditClick")
        console.log(e.target)
        console.log(json_file)
        // TODO: Make ID dynamic as well
        // this.props.history.push(`/songs/0/edit/${json_file}/`)
        this.setState({is_redirect: true})
        this.setState({redirect_to: `/songs/0/edit/${json_file}/`})        
    }

    render() {
        console.log("songs: ", this.props.songs)
        const objects = this.props.songs

        const handleRunClick = this.handleRunClick
        const handleEditClick = this.handleEditClick
        const self = this
        if (this.state.is_redirect) {
            return <Redirect to={this.state.redirect_to} push={true} />
        } else {
            return (
                <div className="col s12">
                    <Table hoverable responsive striped>
                        <thead>
                            <tr>
                                <th data-field="name">Name</th>
                                <th data-field="plugin">Item Name</th>
                                <th data-field="plugin_map">Item Price</th>
                                <th data-field="used_for">Used For</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                objects.map(function (obj, i){
                                    return ( 
                                        <tr key={i}>
                                            <td>{obj.name}</td>
                                            <td>{obj.plugin}</td>
                                            <td>{obj.plugin_map}</td>
                                            <td>{obj.used_for}</td>
                                            <td>
                                                <Button key={`edit-${i}`} json_file={`${obj.name}.json`} 
                                                        onClick={handleEditClick.bind(self, `${obj.name}.json`, i)}
                                                        floating icon='mode_edit' className='dark_blue'/>  
                                                <Button key={`run-${i}`} json_file={`${obj.name}.json`} 
                                                        onClick={handleRunClick.bind(self, `${obj.name}.json`, i)}
                                                        floating icon='send' className='dark_blue'/> 
                                            </td>
                                        </tr>                                       
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            
            )
        }
    }     
};