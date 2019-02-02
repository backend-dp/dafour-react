import React, { Component } from 'react';




class ARindex extends Component {

  render(){
    return(

<div>
  {/* <!-- Header Section !--> */}
  
  <header className="header align-items-center m-0 p-0 position-absolute w-100" id="header">
    <div className="w90">
      <nav className="navbar navbar-expand-md navbar-light"> <a className="navbar-brand logo text-center" href="/ARindex"> <img src="images/logo.png" alt="logo"/> </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse justify-content-start" id="">
          <ul className="navbar-nav">
            <li className="nav-item"> <a className="nav-link lang" href="/"><img alt="alt" src="images/Language.png"/> الانجليزية</a> </li>
            <li className="nav-item btn-login"> <a className="nav-link px-2" href="#test">تسجيل الدخول</a> </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="">
          <ul className="navbar-nav navigation">
            <li className="nav-item"> <a className="nav-link" href="#test">الرئيسية</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#about">معلومات عنا</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#cmc">سياسة الخصوصية</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#services">الدعم</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#contact">اتصل بنا</a> </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <div className="clearfix"></div>
  {/* <!-- search Section !--> */}
  <section className="slideshow w-100 d-inline-block m-0 p-0">
    <div className="row m-0 p-0"> <img alt="alt" className="d-block img-fluid w-100" src="images/bg.jpg" />
      <div className="search py-5 px-4">
        <p className="lead text-center">Lorem ipsum dolor sit amet,
          dicta posidonium ea has, sea aeque facete constituam ut.</p>
        <div className="col-12">
          <input className="input-group p-3" placeholder="كلمات البحث" />
        </div>
        <div className="row m-0 py-3">
          <div className="col-md-4">
            <select className="p-3">
              <option>فئة التعليم ....</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="p-3">
              <option>المكان/الموقع ....</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="p-3">
              <option>المدرسة أو الجامعة ....</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <button className="btn">بحث</button>
        </div>
      </div>
    </div>
  </section>
  <div className="clearfix"></div>
  {/* <!-- Latest paper Section !--> */}
  <div className="backimg w-100 d-inline-block" id="about">
    <section className="about w90">
      <h1 className="text-center p-4">أحدث الأوراق</h1>
      <div className="row m-0 align-items-center">
        <div className="col-md-12 text-center align-items-center">
          <ul className="list-inline text-center align-self-center align-items-center list-items paper-list">
            <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="generalEducation">تعليم عام</li>
            <li className="list-inline-item m-0 p-3 font-weight-bold " id="universityEducation">تعليم جامعي</li>
            <li className="list-inline-item m-0 p-3 font-weight-bold" id="vocationalEducation">التعليم الفني</li>
          </ul>
        </div>
      </div>
      <div id="paperTabs">
        <div className="row m-0 generalEducation">
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span>المؤلفون</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span>سنة النشر</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span>الصفحات</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">التفاصيل
</a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
        </div>
        <div className="row m-0 universityEducation">
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
        </div>
        <div className="row m-0 vocationalEducation">
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
          <div className="col-md-4 text-left mt-4">
            <div className="row h-100 m-0 paper">
              <div className="col-12">
                <h3 className="text-center py-2">Heading</h3>
                <p className="align-self-start">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-12 align-self-center">
                <ul className="list-group">
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li className="list-group-item d-flex"><span className="badge"><img alt="alt" src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
              <div className="col-12 align-self-end mt-4 p-0"> <a className="btn  btn-block text-center align-items-end align-self-end p-2" href="#test">More Details </a> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="clearfix"></div>
  {/* <!-- Plans Section !--> */}
  <div className="backimg w-100 d-inline-block" id="cmc">
    <section className="cmc-project w90">
      <h1 className="text-center p-4">انواع الباقات</h1>
      <div className="row m-0 align-items-center">
        <div className="col-md-12 text-center align-items-center">
          <ul className="list-inline text-center align-self-center align-items-center list-items plan-list">
            <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">تعليم عام</li>
            <li className="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">تعليم جامعي و فني</li>
          </ul>
        </div>
      </div>
      <div className="py-2 text-center" id="planTabs">
        <div className="container planType">
          <div className="row my-4">
            <div className="col-md-4">
              <div className="card m-1 card-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>الباقة الأولى</b></h1>
                  <br/>
                  <p><b>5</b> عدد المذكرات</p>
                  <hr/>
                  <p><b>5</b> عدد الوثائق</p>
                  <hr/>
                  <p><b>3</b> الاشتراك الشهري</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">شراء الآن</a> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card m-1 card-plan active-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>الباقة الثانية</b></h1>
                  <br/>
                  <p><b>5</b> Number of Memos</p>
                  <hr/>
                  <p><b>5</b> Number of Documents</p>
                  <hr/>
                  <p><b>3</b> Month Subscription</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy Now</a> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card m-1 card-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>الباقة الثالثة</b></h1>
                  <br/>
                  <p><b>5</b> Number of Memos</p>
                  <hr/>
                  <p><b>5</b> Number of Documents</p>
                  <hr/>
                  <p><b>3</b> Month Subscription</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy Now</a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container accSetting">
          <div className="row my-4">
            <div className="col-md-4">
              <div className="card m-1 card-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>Plan 1</b></h1>
                  <br/>
                  <p><b>5</b> Number of Memos</p>
                  <hr/>
                  <p><b>5</b> Number of Documents</p>
                  <hr/>
                  <p><b>3</b> Month Subscription</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy Now</a> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card m-1 card-plan active-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>Plan 2</b></h1>
                  <br/>
                  <p><b>5</b> Number of Memos</p>
                  <hr/>
                  <p><b>5</b> Number of Documents</p>
                  <hr/>
                  <p><b>3</b> Month Subscription</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy Now</a> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card m-1 card-plan">
                <div className="card-block my-3 p-5">
                  <h1><b>Plan 3</b></h1>
                  <br/>
                  <p><b>5</b> Number of Memos</p>
                  <hr/>
                  <p><b>5</b> Number of Documents</p>
                  <hr/>
                  <p><b>3</b> Month Subscription</p>
                  <hr/>
                  <p><b>40</b> SAR</p>
                  <hr/>
                </div>
                <div className="card-block w-100 p-0"> <a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy Now</a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="clearfix"></div>
  
  {/* <!-- Contact Section !--> */}
  <div className="backimg w-100 d-inline-block mt-3" id="contact">
    <section className="contact">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-capitalize">اتصل بنا</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w90">
        <div className="row">
          <div className="col-md-6 px-3">
            <form className="text-center">
              <div className="form-group">
                <input type="text" className="form-control p-3 contact-input" id="InputName" placeholder="الاسم .." />
              </div>
              <div className="form-group">
                <input type="email" className="form-control p-3 contact-input" id="InputEmail1" placeholder="البريد الإلكتروني.." />
              </div>
              <div className="form-group">
                <textarea className="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="الرسالة .."></textarea>
              </div>
              <button type="submit" className="btn m-auto text-center">إرسال</button>
            </form>
          </div>
          <div className="col-md-6 px-3">
            <div className="location-map">
              <p className="lead  contact-information">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="p-3">
              <p className="lead contact-information"><img alt="alt" src="images/envelope.png"/> info@Dafour.net</p>
              <p className="lead contact-information"><img alt="alt" src="images/placeholder.png"/> Lorem ipsum dolor sit amet</p>
              <p className="lead contact-information"><img alt="alt" src="images/smartphone.png"/> +96 (1234567891)	+96 (1234567891)</p>
            </div>
          </div>
          <div className="col-md-12 text-center align-items-center">
            <ul className="list-inline text-center align-self-center align-items-center">
              <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/facebook.png"/></li>
              <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/twitter.png"/></li>
              <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/instagram.png"/></li>
              <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/linkedin.png"/></li>
              <li className="list-inline-item m-0 p-3"><img alt="alt" src="images/youtube.png"/></li>
            </ul>
            <p className="lead text-center contact-information p-0 mb-5">جميع الحقوق محفوظة © دافور 2018</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="clearfix"></div>

</div>
);
}

}

export default ARindex;