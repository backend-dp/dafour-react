import React, { Component } from 'react';




class upload-docs extends Component {
  
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
      <section class="about w90 mt-5">
        <div class="row m-0">
          <h1 class="text-center p-4 w-100">Upload Document</h1>
          <div class="w-100" id="planTabs">
            <div class="container">
              <div class="row h-100 m-0 paper">
                <div class="row m-0">
                  <form class="row m-0">
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Doc Title:</label>
                    <div class="col-sm-12 mt-1">
                      <input class="input-group p-3" type="text" placeholder="Doc Title">
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Abstract:</label>
                    <div class="col-sm-12 mt-1">
                      <textarea class="input-group p-3" rows="4" placeholder="Abstract"></textarea>
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Add Keywords:</label>
                    <div class="col-sm-12 mt-1">
                      <input class="input-group p-3" type="text" placeholder="Ex: keyword1, keyword2">
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Upload Doc:</label>
                    <div class="col-sm-12 mt-1">
                      <input class="input-group p-3" type="file" placeholder="Upload Doc">
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Authors Name:</label>
                    <div class="col-sm-12 mt-1">
                      <input class="input-group p-3" type="text" placeholder="Ex: Author1, Author2">
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Year Of Publish:</label>
                    <div class="col-sm-12 mt-1">
                      <input type="text" id="datepicker" class="form-control popups__input date-input input-group p-3"
                                       data-inline="false" data-role="date" placeholder="Year/Month">
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Organization Location:</label>
                    <div class="col-sm-12 mt-1">
                      <select class="input-group p-3">
                        <option>Choose</option>
                      </select>
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">Organization:</label>
                    <div class="col-sm-12 mt-1">
                      <select class="input-group p-3">
                        <option>Choose</option>
                      </select>
                    </div>
                    <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">References:</label>
                    <div class="col-sm-6 mt-1">
                      <input class="input-group p-3" type="text" placeholder="Reference Title">
                    </div>
                    <div class="col-sm-6 mt-1">
                      <input class="input-group p-3" type="url" placeholder="Reference Url">
                    </div>
                  </form>
                </div>
                <div class="col-12 my-3 w-100 text-center">
                  <button class="btn-login py-2 px-5 font-weight-bold">Upload</button>
                </div>
              </div>
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
  </main>
  <div class="clearfix"></div>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
<script>
        $(function () {
            $("#datepicker").datepicker({
                dateFormat: "yy-mm-dd",
                autoSize: true
            });
        });
        $(document).ready(function () {
            var wrapper = $(".reference-inputs");
            var add_button = $(".add-reference");
            $(add_button).click(function (e) {
                e.preventDefault();
                $(wrapper).append('<div class="row w-100 mb-3 ml-0 mr-0 blockinputs"><input type="text" placeholder="Reference Title" class="form-control popups__input col-sm-6"><input type="url" placeholder="Reference Url" class="form-control popups__input col-sm-6"><a class="float-right remove-reference position-absolute"><img src="images/close.png"></a></div>');
            });
            $(wrapper).on("click", ".remove-reference", function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
            });
        });
    </script> 
<script type="text/javascript" src="js/function.js"></script>
</div>
);
}
}

export default upload-docs;