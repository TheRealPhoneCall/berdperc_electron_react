import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

export default class Settings extends React.Component {
  render() {
    // return (
    //   <div>
    //     <Header />
    //     <Nav />
    //     <div className="row">
    //       <div className="col s9 offset-s3">
    //         <h1>Settings Page</h1>
    //       </div>
    //     </div>
    //   </div>
    // )
    console.log("Settings Page Rendered!")
    return (
      <h1>Settings Page</h1>
    )
  }     
};