import React, { Component } from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";
import Header from '../home/Header';




class Login extends Component {

  constructor(props){
    super(props);
    
    this.state={

        username:'',
        password:'',
      
    };
    
  }

  onChange = (name ,evt) => {

    this.setState({
      
      [name]: evt.target.value,
      
    });
    console.log(this.state);
  }
 
 
  login =  (e) => {
    
    e.preventDefault();
    const username = this.state.username 
    const password = this.state.password

    const url = "/api/s/login";
    this.setState({isSubmitting: true, error: ""});
     Axios.post( url ,  {data :{username,password}} )
      .then(res => {
        console.log(res);
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))     
  }


  
  proLogin = (e) => {
  
    e.preventDefault();
    const username = this.state.username 
    const password = this.state.password

    const url = "/api/p/login";
    this.setState({isSubmitting: true, error: ""});
     Axios.post( url ,  {data :{username,password}} )
      .then(res => {
        console.log(res);
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))     
  }
    
  
  // proOnChange (e){
  //   this.setState({[e.target.name]: e.target.value})
  //   console.log(this.state);
  // }

    render() {
      const username = this.state.username;
      const password = this.state.passwors;
        return (
          
        <div>
          <Header />
          {/*  login Section*/}
          <section className="slideshow w-100 d-inline-block m-0 p-0">
            <div className="row m-0 p-0"> <img className="d-block img-fluid w-100 position-absolute" src="images/bg.jpg" alt="bg"/>
              <div className="search py-5 px-4">

                <div className="col-md-12 text-center align-items-center">
                    <ul className="list-inline text-center align-self-center align-items-center plan-list list-items">
                        <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Student Sign In</li>
                        <li className="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">Professional Sign In</li>
                    </ul>
                </div>



                    {/* student */}
                    <div id="planTabs">
                      
                      <form className="form-group" onSubmit={this.login}>
                        <div className="row planType">
                          <p className="lead text-center w-100">Sign In To Student Account.</p>

                            <div className="col-12">
                              <input className="input-group p-3" placeholder="Username Or Email" name="username" onChange={this.onChange.bind(this, 'username')} value={ username } />
                            </div>
                          
                            <div className="col-12 mt-3">
                              <input className="input-group p-3" type="password" placeholder="Password" name="password" onChange={this.onChange.bind(this, 'password')} value={ password } />
                            </div>

                            <div className="col-12 mt-3">
                              <p className="text-left d-inline float-left">You Dont Have An Account ? <Link to="/signup"><small>Create New Account</small></Link></p>

                              <p className="text-right d-inline float-right"><Link to="/forgetpassword"><small>Forget Your Password</small></Link></p>
                            <div className="clearfix"></div>
                            </div>

                            <div className="col-12 mt-3">
                              <button className="btn" type="submit">Login</button>
                            </div>

                        </div>
                    </form>




                {/* pro */}
                   <form className="form-group" onSubmit={this.proLogin}>
                     <div className="row accSetting">
                        <p className="lead text-center w-100">Sign In To Professional Account.</p>
                        <div className="col-12">
                            <input className="input-group p-3" type="text" placeholder="Username Or Email" name="username" onChange={this.onChange.bind(this, 'username')} value={ username }/>
                        </div>
                        <div className="col-12 mt-3">
                            <input className="input-group p-3" type="password" placeholder="Password" name="password" onChange={this.onChange.bind(this, 'password')} value={ password } />
                        </div>
                        <div className="col-12 mt-3">
                          <p className="text-left d-inline float-left">You Dont Have An Account ? <Link to="/signup"><small>Create New Account</small></Link></p>
                          <p className="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
                        <div className="clearfix"></div>
                        </div>
                        <div className="col-12 mt-3">
                          <button className="btn" type="submit">Login</button>
                        </div>
                    </div>
                  </form>

         
                 </div>
              </div>
            </div>
          </section>
         
          <div className="clearfix"></div>
    </div>
        
      


);
}

}

export default Login;
