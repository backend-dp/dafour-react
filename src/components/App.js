import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';


import Home from './home/Home';
import About from './en/About';
import Privacy from './en/Privacy';
import Login from './en/Login';
import SignUp from './en/SignUp';
import ARindex from './ar/home/ARindex';
import StudentAccount from './en/StudentAccount';
import ProAccount from './en/ProAccount';







class App extends Component {
  render() {
    return (
      
   
      <BrowserRouter>
      <div>
     
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/signup" component={SignUp} />
         <Route path="/about" component={About} />
         <Route path="/privacy" component={Privacy} />
         <Route path="/ARindex" component={ARindex} />
         <Route path="/s/account" component={StudentAccount} />
         <Route path="/p/account" component={ProAccount} />
    
      </div>
    </BrowserRouter>
    
       
   
    );
  }
}

export default App;
