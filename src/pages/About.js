import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div class="row">
          <div class="col s9 offset-s3">
            <h1>About Page</h1>
          </div>
        </div>
      </div>
    )
  }     
};