import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, IndexRoute, Switch, Link, NavLink} from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Other from './pages/Other';
import Settings from './pages/Settings';
import Layout from './components/Layout'
import Header from './components/Header'
import Nav from './components/Nav'

// render on page
// ReactDOM.render(
//     <BrowserRouter>
//         <div>        
//             <Switch>
//                 <Route component={Layout}/>
//                 <Route exact path="/" component={Home}/>
//                 <Route path="about" component={About}/>
//                 <Route path="help" component={Help}/>
//                 <Route path="other" component={Other}/>
//                 <Route path="settings" component={Settings}/>
//             </Switch>
//         </div>
//     </BrowserRouter>,
//     document.getElementById('app')
// );

// // render on page
// ReactDOM.render(
//     <BrowserRouter>
//         <div> 
//             {/* <Header /> */}
//             <Nav />
//             <div className="row">
//                 <div className="col s9 offset-s3">
//                     <Route exact path="/" component={Home}/>
//                     <Route path="about" component={About}/>
//                     <Route path="help" component={Help}/>
//                     <Route path="other" component={Other}/>
//                     <Route path="settings" component={Settings}/>
//                 </div>
//             </div>                    
//         </div>
//     </BrowserRouter>,
//     document.getElementById('app')
// );

// render on page
ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,
    document.getElementById('app')
);
