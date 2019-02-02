import React, { Component } from 'react';




class search-result extends Component {
  
  render(){
    return(

<div class="h-100" onload="loaderFunc()">
<div id="loader"><img src="images/loader.gif"/></div>
<div id="loadContainer">
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
  <div class="row m-0 p-0"> <img class="d-block img-fluid w-100" src="images/bg.jpg">
   
    <div class="search py-5 px-4">
     <p class="lead text-center">Lorem ipsum dolor sit amet,
dicta posidonium ea has, sea aeque facete constituam ut.</p>
      <div class="col-12">
        <input class="input-group p-3" placeholder="Write Your Keywords">
      </div>
      <div class="row m-0 py-3">
        <div class="col-md-4">
          <select class="p-3">
            <option>Education type ....</option>
          </select>
        </div>
        <div class="col-md-4">
          <select class="p-3">
            <option>Choose location ....</option>
          </select>
        </div>
        <div class="col-md-4">
          <select class="p-3">
            <option>Choose School ....</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <button class="btn">Search</button>
      </div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
<!-- Latest paper Section !-->
<div class="backimg w-100 d-inline-block" id="about">
  <section class="about w90">
    <h1 class="text-center pt-4">Search Result</h1>
    <div class="row m-0">
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      <div class="col-md-4 text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
            <h3 class="text-center py-2">Heading</h3>
            <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">More Details </a> </div>
        </div>
      </div>
      
      
      
      
    </div>
  </section>
</div>
<div class="clearfix"></div>
<!-- Contact Section !-->
<div class="backimg w-100 d-inline-block mt-3" id="contact">
  <section class="contact">
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center text-capitalize">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="w90">
      <div class="row">
        <div class="col-md-6 px-3">
          <form class="text-center">
            <div class="form-group">
              <input type="text" class="form-control p-3 contact-input" id="InputName" placeholder="Your Name..">
            </div>
            <div class="form-group">
              <input type="email" class="form-control p-3 contact-input" id="InputEmail1" placeholder="Enter E-mail..">
            </div>
            <div class="form-group">
              <textarea class="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="Your Message.."></textarea>
            </div>
            <button type="submit" class="btn m-auto text-center">Send</button>
          </form>
        </div>
        <div class="col-md-6 px-3">
          <div class="location-map">
            <p class="lead  contact-information">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="p-3">
            <p class="lead contact-information"><img src="images/envelope.png"/> info@Dafour.net</p>
            <p class="lead contact-information"><img src="images/placeholder.png"/> Lorem ipsum dolor sit amet</p>
            <p class="lead contact-information"><img src="images/smartphone.png"/> +96 (1234567891)	+96 (1234567891)</p>
          </div>
        </div>
        <div class="col-md-12 text-center align-items-center">
          <ul class="list-inline text-center align-self-center align-items-center">
            <li class="list-inline-item m-0 p-3"><img src="images/facebook.png"/></li>
            <li class="list-inline-item m-0 p-3"><img src="images/twitter.png"/></li>
            <li class="list-inline-item m-0 p-3"><img src="images/instagram.png"/></li>
            <li class="list-inline-item m-0 p-3"><img src="images/linkedin.png"/></li>
            <li class="list-inline-item m-0 p-3"><img src="images/youtube.png"/></li>
          </ul>
          <p class="lead text-center contact-information p-0 mb-5">All copyrights reserved © Dafour 2018</p>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="clearfix"></div></div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
<script type="text/javascript" src="js/function.js"></script>
</div>
);
}
}

export default search-result;