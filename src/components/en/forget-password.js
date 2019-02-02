import React, { Component } from 'react';




class forget-password extends Component {

  render(){
    return(

<div class="h-100" onload="loaderFunc()">
<div id="loader"><img src="images/loader.gif"/></div>
<div id="loadContainer">
<main class="login"> 
  <!-- Header Section !-->
  <header class="header align-items-center m-0 p-0 position-absolute w-100" id="header">
    <div class="w90">
      <nav class="navbar navbar-expand-md navbar-light"> <a class="navbar-brand logo text-center" href="#"> <img src="images/logo.png"> </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse justify-content-start" id="">
          <ul class="navbar-nav">
            <li class="nav-item"> <a class="nav-link lang" href="#"><img src="images/Language.png"/> Arabic</a> </li>
            <li class="nav-item btn-login"> <a class="nav-link px-2" href="#">Sign In/Up</a> </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="">
          <ul class="navbar-nav navigation">
            <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#about">About Us</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#cmc">Privacy</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#services">Support</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#contact">Contact us</a> </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <div class="clearfix"></div>
  <!-- search Section !-->
  <section class="slideshow w-100 d-inline-block m-0 p-0">
    <div class="row m-0 p-0"> <img class="d-block img-fluid w-100 position-absolute" src="images/bg.jpg">
      <div class="search py-5 px-4">
        <p class="lead text-center">Reset Your Password.</p>
        <div class="row m-0">
          <div class="col-12 mt-3">
            <input class="input-group p-3" type="email" placeholder="You Email">
          </div>
        </div>
        <div class="col-12 mt-3">
          <p class="text-left d-inline float-left">You Have An Account ? <a href="register.html"><small>Sign In</small></a></p>
          <div class="clearfix"></div>
        </div>
        <div class="col-12 mt-3">
          <button class="btn">Send</button>
        </div>
      </div>
    </div>
  </section>
  <div class="clearfix"></div>
  </div>
</main>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
<script type="text/javascript" src="js/function.js"></script>
</div>
    );
}

}

export default forget-password;