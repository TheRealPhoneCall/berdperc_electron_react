import React from 'react';
import { connect } from "react-redux"
import jsonfile from 'jsonfile'

// components
import Perc from '../components/percussions/Perc';

// actions
import { fetchPercs } from "../actions/percsActions"

// utils
import { PercAPI } from '../../data/api'
import { utils } from '../utils'

@connect((store) => {
  return {
    percs: store.percs.percs
  };
})
export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(fetchPercs())
  }

  render() {
    console.log("Home Page Rendered!")
    const percs = this.props.percs
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