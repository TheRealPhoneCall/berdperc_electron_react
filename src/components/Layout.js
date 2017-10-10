import React from 'react';

import Header from './Header';
import Nav from './Nav';

// render on page
export default class Layout extends React.Component {
    render() {        
        return (
            <div>
                <Header />
                <Nav />
            </div>
        )
    }
};