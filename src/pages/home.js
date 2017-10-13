import React from 'react';
import jsonfile from 'jsonfile'

import Perc from '../components/percussions/Perc';

import {PercAPI} from '../data/api'

const utils = require('../utils')


export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      percussions: PercAPI.all()
    }
  }

  render() {
    console.log("Home Page Rendered!")

    return (
      <div className="col s12">
        {
          this.state.percussions.map(function (percussion, i){
            return (
              <div key={i}>
                <Perc key={i} perc={percussion}/>
              </div>
            )
          })
        }
      </div>
    )
  }     
};