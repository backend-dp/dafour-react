import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
  render() {



    return (
      <div>
{/* <!-- Header Section !--> */}

    <header className="header align-items-center m-0 p-0 position-absolute w-100" id="header">
        <div className="w90">
            <nav className="navbar navbar-expand-md navbar-light"><Link className="navbar-brand logo text-center" to="/">
                    <img  src="../images/logo.png" alt="logo"/> </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link lang" to="/ARindex"><img src="../images/Language.png" alt="language"  />
                                Arabic</Link></li>
                        <li className="nav-item btn-login"><Link className="nav-link px-2" to="/login">Sign In/Up</Link></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="">
                    <ul className="navbar-nav navigation">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="about">About Us</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/privacy">Privacy</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#support">Support</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#contact">Contact us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <div className="clearfix"></div>

</div>

    )
  }
}
