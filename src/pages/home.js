import React from 'react';
import jsonfile from 'jsonfile'

import Header from '../components/Header';
import Nav from '../components/Nav';
import Percussion from '../components/percussions/Percussion';

import PercAPI from '../data/api'

const utils = require('../utils')

// Uncomment for now, because it's not working
// function getJsonObject (jsonFilePath) {
//   jsonfile.readFile(jsonFilePath, function(err, obj) {
//       return obj
//   })
// }


export default class Home extends React.Component {

  render() {
    console.log("Home Page Rendered!")

    // const percussions = getJsonObject('../data/percussions.json');    
    const percussions = PercAPI.all();
    console.log("percussions:", percussions)
    return (
      <div className="col s12">
        <Percussion perc={percussions[0]}/>
        <Percussion perc={percussions[1]}/>
        <Percussion perc={percussions[2]}/>
      </div>
    )
  }     
};