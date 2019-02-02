import React, { Component } from 'react';




class welcome-login extends Component {
  
  render(){
    return(

<div class="h-100" onload="loaderFunc()">

    <div id="loader"><img src="images/loader.gif" /></div>


    <div id="loadContainer">
        <!-- Header Section !-->

        <header class="header align-items-center m-0 p-0 position-absolute w-100" id="header">
            <div class="w90">
                <nav class="navbar navbar-expand-md navbar-light"><a class="navbar-brand logo text-center" href="#">
                        <img src="images/logo.png"> </a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-start" id="">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link lang" href="#"><img src="images/Language.png" />
                                    Arabic</a></li>
                            <li class="nav-item btn-login"><a class="nav-link px-2" href="#">Sign In/Up</a></li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="">
                        <ul class="navbar-nav navigation">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="#cmc">Privacy</a></li>
                            <li class="nav-item"><a class="nav-link" href="#services">Support</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div class="clearfix"></div>
        <!-- search Section !-->

        <section class="slideshow w-100 d-inline-block m-0 p-0">
            <div class="alert alert-secondary login-alert text-center mx-auto w-50 position-absolute" role="alert">
                Welcome to DAFOUR, Ahmed Khairalah
            </div>
            <div class="row m-0 p-0"><img class="d-block img-fluid w-100" src="images/bg.jpg">

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
                <h1 class="text-center p-4">Latest Papers </h1>
                <div class="row m-0 align-items-center">
                    <div class="col-md-12 text-center align-items-center">
                        <ul class="list-inline text-center align-self-center align-items-center list-items paper-list">
                            <li class="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="generalEducation">
                                General Education
                            </li>
                            <li class="list-inline-item m-0 p-3 font-weight-bold " id="universityEducation">University
                                Education
                            </li>
                            <li class="list-inline-item m-0 p-3 font-weight-bold" id="vocationalEducation">Vocational
                                Education
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="paperTabs">
                    <div class="row m-0 generalEducation slider-nav">
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0 universityEducation">
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0 vocationalEducation">
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                        <div class="col-md-4 text-left mt-4">
                            <div class="row h-100 m-0 paper">
                                <div class="col-12">
                                    <h3 class="text-center py-2">Heading</h3>
                                    <p class="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="col-12 align-self-center">
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png" /></span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png" /></span>
                                            Cras justo
                                            odio
                                        </li>
                                        <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png" /></span>
                                            Cras justo odio
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 align-self-end mt-4 p-0"><a class="btn  btn-block text-center align-items-end align-self-end p-2"
                                        href="#">More
                                        Details </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="clearfix"></div>
        <!-- Plans Section !-->
        <div class="backimg w-100 d-inline-block" id="cmc">
            <section class="cmc-project w90">
                <h1 class="text-center p-4">Our Plans</h1>
                <div class="row m-0 align-items-center">
                    <div class="col-md-12 text-center align-items-center">
                        <ul class="list-inline text-center align-self-center align-items-center list-items plan-list">
                            <li class="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Public
                                Education
                            </li>
                            <li class="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">University &
                                Technical
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="py-2 text-center" id="planTabs">
                    <div class="container planType">
                        <div class="row my-4">
                            <div class="col-md-4">
                                <div class="card m-1 card-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 1</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card m-1 card-plan active-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card m-1 card-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container accSetting">
                        <div class="row my-4">
                            <div class="col-md-4">
                                <div class="card m-1 card-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 1</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card m-1 card-plan active-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card m-1 card-plan">
                                    <div class="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br>
                                        <p><b>5</b> Number of Memos</p>
                                        <hr>
                                        <p><b>5</b> Number of Documents</p>
                                        <hr>
                                        <p><b>3</b> Month Subscription</p>
                                        <hr>
                                        <p><b>40</b> SAR</p>
                                        <hr>
                                    </div>
                                    <div class="card-block w-100 p-0"><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            class="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
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
                                    <input type="text" class="form-control p-3 contact-input" id="InputName"
                                        placeholder="Your Name..">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control p-3 contact-input" id="InputEmail1"
                                        placeholder="Enter E-mail..">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="Your Message.."></textarea>
                                </div>
                                <button type="submit" class="btn m-auto text-center">Send</button>
                            </form>
                        </div>
                        <div class="col-md-6 px-3">
                            <div class="location-map">
                                <p class="lead  contact-information">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,
                                    sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.</p>
                            </div>
                            <div class="p-3">
                                <p class="lead contact-information"><img src="images/envelope.png" /> info@Dafour.net</p>
                                <p class="lead contact-information"><img src="images/placeholder.png" /> Lorem ipsum
                                    dolor
                                    sit amet</p>
                                <p class="lead contact-information"><img src="images/smartphone.png" /> +96
                                    (1234567891) +96
                                    (1234567891)</p>
                            </div>
                        </div>
                        <div class="col-md-12 text-center align-items-center">
                            <ul class="list-inline text-center align-self-center align-items-center">
                                <li class="list-inline-item m-0 p-3"><img src="images/facebook.png" /></li>
                                <li class="list-inline-item m-0 p-3"><img src="images/twitter.png" /></li>
                                <li class="list-inline-item m-0 p-3"><img src="images/instagram.png" /></li>
                                <li class="list-inline-item m-0 p-3"><img src="images/linkedin.png" /></li>
                                <li class="list-inline-item m-0 p-3"><img src="images/youtube.png" /></li>
                            </ul>
                            <p class="lead text-center contact-information p-0 mb-5">All copyrights reserved © Dafour
                                2018</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="clearfix"></div>
    </div>


    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content text-center">
                <div class="modal-header text-center font-weight-bold mb-2">
                    <a href="#"class="backto">back</a><strong class="text-center w-100"> خيارات الدفع</strong>
                </div>
                <div class="row text-center py-3 m-0 choosepayment">
                    <div class="col">
                        <a href="#" id="sadadtransfer">
                            <img class="default-img" src="images/sadad-grey.png" style="width: 100px; height: auto;" />
                            <img class="hover-img" src="images/sadad-blue.png" style="width: 100px; height: auto;" />
                            <p class="font-weight-bold py-2">حساب سداد</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" id="paypal">
                            <img class="default-img" src="images/paypal-grey.png" />
                            <img class="hover-img" src="images/paypal-blue.png" />
                            <p class="font-weight-bold py-2">PayPal</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" id="creditcard">
                            <img class="default-img" src="images/credit-card-grey.png" />
                            <img class="hover-img" src="images/credit-card-blue.png" />
                            <p class="font-weight-bold py-2">البطاقة الائتمانية</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" id="banktransfer">
                            <img class="default-img" src="images/bank-grey.png" />
                            <img class="hover-img" src="images/bank-blue.png" />
                            <p class="font-weight-bold py-2">التحويل البنكى</p>
                        </a>
                    </div>

                </div>
                <div class="row text-center py-3 m-0 creditcard paymentStep2">
                    <div class="col">
                        <form>
                            <div class="row">
                                    <h3 class="text-center w-100 font-weight-bold">البطاقة الائتمانية</h3>
                                <div class="col-12 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="....رقم البطاقة">
                                </div>
                                <div class="col-8 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="....تاريخ الإنتهاء">
                                </div>
                                <div class="col-4 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="الكود">
                                </div>
                                <div class="col-12 my-1">
                                    <button class="btn btn-md px-3">إضافة</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="row text-center py-3 m-0 sadadtransfer paymentStep2">
                    <div class="col">
                        <form>
                            <div class="row">
                                <h3 class="text-center w-100 font-weight-bold">حساب سداد</h3>
                                <div class="col-12 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="....رقم البطاقة">
                                </div>

                                <div class="col-12 my-1">
                                    <button class="btn btn-md px-3">دفع</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="row text-center py-3 m-0 banktransfer paymentStep2">
                    <div class="col-12">
                        <form class="bankTransferForm">
                            <div class="row">
                                <h3 class="text-center w-100 font-weight-bold">التحويل البنكى</h3>
                                <div class="col-12 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="الاسم...">
                                </div>
                                <div class="col-12 my-1">
                                    <input class="p-2 w-100" type="text" placeholder="....رقم الحساب">
                                </div>
                                <div class="col-12 my-1">
                                    <button class="btn btn-md px-3">اظهار ارقام الحسابات</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 py-2 bankAccounts">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>اسم البنك</th>
                                    <th>رقم الحساب</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                                <tr>
                                    <td>بنك البلاد</td>
                                    <td>0101010101010</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
<div class="modal-footer text-center d-block">
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <img class="img-thumbnail" src="images/discover.png"/>
  </li>
  <li class="nav-item">
   <img class="img-thumbnail" src="images/visa.png"/>
  </li>
  <li class="nav-item">
   <img class="img-thumbnail" src="images/master-card.png"/>
  </li>

</ul>
      </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="js/slick.js"></script>
    <script type="text/javascript" src="js/function.js"></script>
    <script>
            $(document).ready(function () {
                $('.choosepayment div a').click(function () {
                    $("." + $(this).attr("id")).show();
                    $('.choosepayment').hide();
                });
                $('.backto').click(function(){
                    $('.choosepayment').show();
                    $('.paymentStep2').hide();
                });
                $('.bankTransferForm button').click(function(){
                    $('.bankAccounts').show().siblings().hide();

                })
            });
    
        </script>
</div>

);
}
}

export default welcome-login;