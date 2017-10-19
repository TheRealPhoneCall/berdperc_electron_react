import React from 'react'
import { observer } from 'mobx-react'
import jsonfile from 'jsonfile'

// components
import Perc from '../components/percussions/Perc';

// utils
import { PercAPI } from '../../data/api'
import { utils } from '../utils'

@observer
export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("Home Page Rendered!")
    const percs = PercAPI.all()
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