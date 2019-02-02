import React, { Component } from 'react';




class sign-up extends Component {
  
  render(){
    return(

<div class="h-100" onload="loaderFunc()">
<div id="loader"><img src="images/loader.gif"/></div>
<div id="loadContainer">
<main class="pages">
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
<!-- Latest paper Section !-->
<div class="backimg w-100 d-inline-block mt-5" id="about">
  <section class="about w90  mt-5">
    <div class="row m-0">
      <div class="container text-left mt-4">
        <div class="row h-100 m-0 paper">
          <div class="col-12">
           <div class="row">
            <h3 class="text-center py-2 w-100">Heading</h3>
            </div>
            <p class="align-self-start expandBlock">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
          <div class="col-12 align-self-center">
            <ul class="list-group">
              <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
              <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
            </ul>
          </div>
          <div class="col-12 align-self-end mt-4 p-0"> <a class="btn  btn-block text-center align-items-end align-self-end p-2" href="#">Download</a> </div>
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
<div class="clearfix"></div>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
<script type="text/javascript" src="js/jquery.collapser.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
 <script>
        $(document).ready(function () {
            $('.expandBlock').collapser({
                mode: 'lines',
                truncate: 3
            });

            $('.p2').collapser({
                mode: 'block',
                showText: 'Show paragraph',
                hideText: 'Hide paragraph',
                changeText: 1
            });

            $('.p3 li').collapser({
                mode: 'words',
                truncate: 2,
            });

        });
	 </script>

<script type="text/javascript" src="js/function.js"></script>
</main>
</div>

);
}
}

export default sign-up;