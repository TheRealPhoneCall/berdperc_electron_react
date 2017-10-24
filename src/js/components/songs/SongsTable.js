import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import { Table, Button } from 'react-materialize';

import { PyShell } from '../../utils'
import { ConfigAPI } from '../../../data/api'

@inject('song_store', 'config_store')
@observer
export default class SongsTable extends React.Component {
    constructor() {
        super()
        this.state = {
            is_redirect: false,
            redirect_to: ""
        }
    }

    getJsonFile(id) {
        for (let i = 0; i < this.props.config_store.configs.length; i++) {
            if (i === id){
                let obj = this.props.config_store.configs[i]
                return `${obj.name}.json`
            }
            
        }
    }

    handleRunClick(e, id) {
        console.log("handleRunClick")
        console.log(e.target)
        const json_file = this.getJsonFile(id)
        console.log(json_file)
        // TODO: Make ID dynamic as well
        this.setState({is_redirect: true})
        this.setState({redirect_to: `/songs/0/run/${json_file}`})
        // TODO: Make a logic based on success of the python call
        PyShell.arduino_std("COM5", "31250", json_file)
    }

    handleEditClick(e, id) {
        console.log("handleEditClick")
        console.log(e.target)
        const json_file = this.getJsonFile(id)
        console.log(json_file)
        // TODO: Make ID dynamic as well
        this.setState({is_redirect: true})
        this.setState({redirect_to: `/songs/0/edit/${json_file}`})        
    }

    render() {
        const configs = this.props.config_store.configs_by_genre
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
                                configs.map(function (config, i){
                                    return ( 
                                        <tr key={i}>
                                            <td>{config.name}</td>
                                            <td>{config.plugin}</td>
                                            <td>{config.plugin_map}</td>
                                            <td>{config.used_for}</td>
                                            <td>
                                                <Button key={`edit-${i}`} json_file={`${config.name}.json`} 
                                                        onClick={handleEditClick.bind(self, `${config.name}.json`, i)}
                                                        floating icon='mode_edit' className='dark_blue'/>  
                                                <Button key={`run-${i}`} json_file={`${config.name}.json`} 
                                                        onClick={handleRunClick.bind(self, `${config.name}.json`, i)}
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