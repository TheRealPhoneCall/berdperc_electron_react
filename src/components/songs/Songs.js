import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-materialize';

import { PyShell } from '../../utils'



export default class Perc extends React.Component {
    constructor() {
        super()
    }

    handleRunClick(e) {
        console.log("handleRunClick")
        console.log(e)
        // PyShell.arduino_std(com="COM5", baud_rate="31250", json_file="")
    }

    handleEditClick(e) {
        console.log(e)
        console.log("handleRunClick")
    }

    render() {
        const objects = this.props.songs
        
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
                                            <Button key={i} json_file={`${obj.name}.json`} 
                                                    onClick={this.handleEditClick.bind(this)}
                                                    floating icon='mode_edit' className='dark_blue'/>  
                                            <Button key={i} json_file={`${obj.name}.json`} 
                                                    onClick={this.handleRunClick.bind(this)}
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
};