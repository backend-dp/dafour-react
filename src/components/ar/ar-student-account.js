import React, { Component } from 'react';




class ar-student-account extends Component {

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
            <li class="nav-item"> <a class="nav-link lang" href="#"><img src="images/Language.png"/> الانجليزية</a> </li>
            <li class="nav-item btn-login"> <a class="nav-link px-2" href="#">تسجيل الدخول</a> </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="">
          <ul class="navbar-nav navigation">
            <li class="nav-item"> <a class="nav-link" href="#">الرئيسية</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#about">معلومات عنا</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#cmc">سياسة الخصوصية</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#services">الدعم</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#contact">اتصل بنا</a> </li>
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
        <h1 class="text-center p-4 w-100">حسابي</h1>
        <div class="container m-auto align-items-center text-center">
          <div class="col-md-12 text-center align-items-center">
            <ul class="list-inline text-center align-self-center align-items-center plan-list list-items">
              <li class="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">نوع الباقة</li>
              <li class="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">إعدادات الحساب</li>
            </ul>
          </div>
        </div>
        <div class="w-100" id="planTabs">
          <div class="container text-left mt-4 planType">
            <div class="row h-100 w-100 m-0 paper">
              <div class="col-12 align-self-center">
                <ul class="list-group">
                  <li class="list-group-item d-flex"><span class="badge"><img src="images/author-sign.png"/></span> Cras justo odio</li>
                  <li class="list-group-item d-flex"><span class="badge"><img src="images/calendar-tool-for-time-organization.png"/></span> Cras justo odio</li>
                  <li class="list-group-item d-flex"><span class="badge"><img src="images/documents-button.png"/></span> Cras justo odio</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container accSetting">
            <div class="row h-100 m-0 paper">
              <div class="row m-0">
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">الاسم</label>
                <div class="col-sm-4 mt-1">
                  <input class="input-group p-3" type="text" placeholder="الاسم الاول">
                </div>
                <div class="col-sm-4 mt-1">
                  <input class="input-group p-3" type="text" placeholder="اسم الثاني">
                </div>
                <div class="col-sm-4 mt-1">
                  <input class="input-group p-3" type="text" placeholder="اسم العائلة">
                </div>
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">الدرجة العلمية
</label>
                <div class="col-12 mt-1">
                  <input class="input-group p-3" type="text" placeholder="الدرجة العلمية
">
                </div>
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">بريدك الالكتروني</label>
                <div class="col-12 mt-1">
                  <input class="input-group p-3" type="email" placeholder="بريدك الالكتروني">
                </div>
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">كلمه السر</label>
                <div class="col-12 mt-1">
                  <input class="input-group p-3" type="password" placeholder="كلمه السر">
                </div>
                <div class="col-12 mt-1">
                  <input class="input-group p-3" type="password" placeholder="تأكيد كلمة السر">
                </div>
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">رقم الهاتف</label>
                <div class="col-12 mt-1">
                  <input class="input-group p-3" type="tel" placeholder="رقم الهاتف">
                </div>
                <label class="w-100 px-3 py-0 mx-0 mt-3 text-left">الدولة</label>
                <div class="col-12 mt-1">
                  <select class="input-group p-3">
                    <option selected="selected" value="">اختر الدولة</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div class="col-12 m-3 w-100 text-center">
                <button class="btn-login py-2 px-5 font-weight-bold">تحديث</button>
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
              <h1 class="text-center text-capitalize">اتصل بنا</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="w90">
        <div class="row">
          <div class="col-md-6 px-3">
            <form class="text-center">
              <div class="form-group">
                <input type="text" class="form-control p-3 contact-input" id="InputName" placeholder="الاسم ..
">
              </div>
              <div class="form-group">
                <input type="email" class="form-control p-3 contact-input" id="InputEmail1" placeholder="البريد الإلكتروني..">
              </div>
              <div class="form-group">
                <textarea class="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="الرسالة .."></textarea>
              </div>
              <button type="submit" class="btn m-auto text-center">إرسال</button>
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
            <p class="lead text-center contact-information p-0 mb-5">جميع الحقوق محفوظة © دافور 2018</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="clearfix"></div>
  </div>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
  <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
  <script type="text/javascript" src="js/function.js"></script> 
</main>
</div>
    );
}
}

export default ar-student-account;