import React from 'react'
import { inject, observer } from 'mobx-react'
import jsonfile from 'jsonfile'

// components
import Perc from '../components/percussions/Perc';

// utils
import { PercAPI } from '../../data/json_service'
import { utils } from '../utils'

@inject("perc_store")
@observer
export default class Home extends React.Component {
  constructor() {
    super();
  }
  componentWillMount(){
    this.props.perc_store.fetchPercs()
  }
  render() {
    console.log("Home Page Rendered!")
    // this.props.perc_store.fetchPercs()
    const percs = this.props.perc_store.percs
    console.log("mobx store:", this.props, this.props.store)
    return (
      <div className="col s12">
        {
          percs.map((perc, i) => {
            return <div key={i}><Perc key={i} perc={perc}/></div>  
          })
        }
      </div>
    )
  }     
};