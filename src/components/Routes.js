import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';


import Home from './home/Home';
import About from './en/About';
import Privacy from './en/Privacy';
import Login from './en/Login';
import SignUp from './en/SignUp';




class Routes extends Component {
  render() {
    return (
      
       <BrowserRouter>
         <div>

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/signup" component={SignUp} />
       
         </div>
       </BrowserRouter>
       
   
    );
  }
}

export default Routes;
