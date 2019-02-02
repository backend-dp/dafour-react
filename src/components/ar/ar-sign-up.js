import React, { Component } from 'react';




class ar-sign-up extends Component {

  render(){
    return(

<div class="h-100" onload="loaderFunc()">
<img src="images/loader.gif"/></div>
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
        <p class="lead text-center">انشاء حساب جديد.</p>
        <div class="container m-auto align-items-center text-center">
          <div class="col-md-12 text-center align-items-center">
            <ul class="list-inline text-center align-self-center align-items-center plan-list list-items">
              <li class="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">تسجيل كاطالب</li>
              <li class="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">تسجيل كامدرس</li>
            </ul>
          </div>
        </div>
        <div id="planTabs">
          <div class="row m-0 planType">
           
            <p class="lead col-12 text-center">تسجيل كامدرس</p>
            <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="الاسم الاول">
            </div>
            <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="اسم الثاني">
            </div>
            <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="اسم العائلة">
            </div>
            <div class="col-12 mt-3">
  <input class="input-group p-3" type="text" placeholder="الدرجة العلمية">
                       </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="email" placeholder="بريدك الالكتروني">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="password" placeholder="كلمه السر">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="password" placeholder="تأكيد كلمة السر">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="tel" placeholder="رقم الهاتف">
            </div>
            <div class="col-12 mt-3">
              <select name="country" class="input-group p-3">
            <option value="" disabled selected>إختر</option>
            <option value="أفغانستان">أفغانستان</option>
            <option value="ألبانيا">ألبانيا</option>
            <option value="الجزائر">الجزائر</option>
            <option value="أندورا">أندورا</option>
            <option value="أنغولا">أنغولا</option>
            <option value="أنتيغوا وباربودا">أنتيغوا وباربودا</option>
            <option value="الأرجنتين">الأرجنتين</option>
            <option value="أرمينيا">أرمينيا</option>
            <option value="أستراليا">أستراليا</option>
            <option value="النمسا">النمسا</option>
            <option value="أذربيجان">أذربيجان</option>
            <option value="البهاما">البهاما</option>
            <option value="البحرين">البحرين</option>
            <option value="بنغلاديش">بنغلاديش</option>
            <option value="باربادوس">باربادوس</option>
            <option value="بيلاروسيا">بيلاروسيا</option>
            <option value="بلجيكا">بلجيكا</option>
            <option value="بليز">بليز</option>
            <option value="بنين">بنين</option>
            <option value="بوتان">بوتان</option>
            <option value="بوليفيا">بوليفيا</option>
            <option value="البوسنة والهرسك ">البوسنة والهرسك </option>
            <option value="بوتسوانا">بوتسوانا</option>
            <option value="البرازيل">البرازيل</option>
            <option value="بروناي">بروناي</option>
            <option value="بلغاريا">بلغاريا</option>
            <option value="بوركينا فاسو ">بوركينا فاسو </option>
            <option value="بوروندي">بوروندي</option>
            <option value="كمبوديا">كمبوديا</option>
            <option value="الكاميرون">الكاميرون</option>
            <option value="كندا">كندا</option>
            <option value="الرأس الأخضر">الرأس الأخضر</option>
            <option value="جمهورية أفريقيا الوسطى ">جمهورية أفريقيا الوسطى </option>
            <option value="تشاد">تشاد</option>
            <option value="تشيلي">تشيلي</option>
            <option value="الصين">الصين</option>
            <option value="كولومبيا">كولومبيا</option>
            <option value="جزر القمر">جزر القمر</option>
            <option value="كوستاريكا">كوستاريكا</option>
            <option value="ساحل العاج">ساحل العاج</option>
            <option value="كرواتيا">كرواتيا</option>
            <option value="كوبا">كوبا</option>
            <option value="قبرص">قبرص</option>
            <option value="التشيك">التشيك</option>
            <option value="جمهورية الكونغو الديمقراطية">جمهورية الكونغو الديمقراطية</option>
            <option value="الدنمارك">الدنمارك</option>
            <option value="جيبوتي">جيبوتي</option>
            <option value="دومينيكا">دومينيكا</option>
            <option value="جمهورية الدومينيكان">جمهورية الدومينيكان</option>
            <option value="تيمور الشرقية ">تيمور الشرقية </option>
            <option value="الإكوادور">الإكوادور</option>
            <option value="مصر">مصر</option>
            <option value="السلفادور">السلفادور</option>
            <option value="غينيا الاستوائية">غينيا الاستوائية</option>
            <option value="إريتريا">إريتريا</option>
            <option value="إستونيا">إستونيا</option>
            <option value="إثيوبيا">إثيوبيا</option>
            <option value="فيجي">فيجي</option>
            <option value="فنلندا">فنلندا</option>
            <option value="فرنسا">فرنسا</option>
            <option value="الغابون">الغابون</option>
            <option value="غامبيا">غامبيا</option>
            <option value="جورجيا">جورجيا</option>
            <option value="ألمانيا">ألمانيا</option>
            <option value="غانا">غانا</option>
            <option value="اليونان">اليونان</option>
            <option value="جرينادا">جرينادا</option>
            <option value="غواتيمالا">غواتيمالا</option>
            <option value="غينيا">غينيا</option>
            <option value="غينيا بيساو">غينيا بيساو</option>
            <option value="غويانا">غويانا</option>
            <option value="هايتي">هايتي</option>
            <option value="هندوراس">هندوراس</option>
            <option value="المجر">المجر</option>
            <option value="آيسلندا">آيسلندا</option>
            <option value="الهند">الهند</option>
            <option value="إندونيسيا">إندونيسيا</option>
            <option value="إيران">إيران</option>
            <option value="العراق">العراق</option>
            <option value="جمهورية أيرلندا ">جمهورية أيرلندا </option>
            <option value="فلسطين">فلسطين</option>
            <option value="إيطاليا">إيطاليا</option>
            <option value="جامايكا">جامايكا</option>
            <option value="اليابان">اليابان</option>
            <option value="الأردن">الأردن</option>
            <option value="كازاخستان">كازاخستان</option>
            <option value="كينيا">كينيا</option>
            <option value="كيريباتي">كيريباتي</option>
            <option value="الكويت">الكويت</option>
            <option value="قرغيزستان">قرغيزستان</option>
            <option value="لاوس">لاوس</option>
            <option value="لاوس">لاوس</option>
            <option value="لاتفيا">لاتفيا</option>
            <option value="لبنان">لبنان</option>
            <option value="ليسوتو">ليسوتو</option>
            <option value="ليبيريا">ليبيريا</option>
            <option value="ليبيا">ليبيا</option>
            <option value="ليختنشتاين">ليختنشتاين</option>
            <option value="ليتوانيا">ليتوانيا</option>
            <option value="لوكسمبورغ">لوكسمبورغ</option>
            <option value="مدغشقر">مدغشقر</option>
            <option value="مالاوي">مالاوي</option>
            <option value="ماليزيا">ماليزيا</option>
            <option value="جزر المالديف">جزر المالديف</option>
            <option value="مالي">مالي</option>
            <option value="مالطا">مالطا</option>
            <option value="جزر مارشال">جزر مارشال</option>
            <option value="موريتانيا">موريتانيا</option>
            <option value="موريشيوس">موريشيوس</option>
            <option value="المكسيك">المكسيك</option>
            <option value="مايكرونيزيا">مايكرونيزيا</option>
            <option value="مولدوفا">مولدوفا</option>
            <option value="موناكو">موناكو</option>
            <option value="منغوليا">منغوليا</option>
            <option value="الجبل الأسود">الجبل الأسود</option>
            <option value="المغرب">المغرب</option>
            <option value="موزمبيق">موزمبيق</option>
            <option value="بورما">بورما</option>
            <option value="ناميبيا">ناميبيا</option>
            <option value="ناورو">ناورو</option>
            <option value="نيبال">نيبال</option>
            <option value="هولندا">هولندا</option>
            <option value="نيوزيلندا">نيوزيلندا</option>
            <option value="نيكاراجوا">نيكاراجوا</option>
            <option value="النيجر">النيجر</option>
            <option value="نيجيريا">نيجيريا</option>
            <option value="كوريا الشمالية ">كوريا الشمالية </option>
            <option value="النرويج">النرويج</option>
            <option value="سلطنة عمان">سلطنة عمان</option>
            <option value="باكستان">باكستان</option>
            <option value="بالاو">بالاو</option>
            <option value="بنما">بنما</option>
            <option value="بابوا غينيا الجديدة">بابوا غينيا الجديدة</option>
            <option value="باراغواي">باراغواي</option>
            <option value="بيرو">بيرو</option>
            <option value="الفلبين">الفلبين</option>
            <option value="بولندا">بولندا</option>
            <option value="البرتغال">البرتغال</option>
            <option value="قطر">قطر</option>
            <option value="جمهورية الكونغو">جمهورية الكونغو</option>
            <option value="جمهورية مقدونيا">جمهورية مقدونيا</option>
            <option value="رومانيا">رومانيا</option>
            <option value="روسيا">روسيا</option>
            <option value="رواندا">رواندا</option>
            <option value="سانت كيتس ونيفيس">سانت كيتس ونيفيس</option>
            <option value="سانت لوسيا">سانت لوسيا</option>
            <option value="سانت فنسينت والجرينادينز">سانت فنسينت والجرينادينز</option>
            <option value="ساموا">ساموا</option>
            <option value="سان مارينو">سان مارينو</option>
            <option value="ساو تومي وبرينسيب">ساو تومي وبرينسيب</option>
            <option value="السعودية">السعودية</option>
            <option value="السنغال">السنغال</option>
            <option value="صربيا">صربيا</option>
            <option value="سيشيل">سيشيل</option>
            <option value="سيراليون">سيراليون</option>
            <option value="سنغافورة">سنغافورة</option>
            <option value="سلوفاكيا">سلوفاكيا</option>
            <option value="سلوفينيا">سلوفينيا</option>
            <option value="جزر سليمان">جزر سليمان</option>
            <option value="الصومال">الصومال</option>
            <option value="جنوب أفريقيا">جنوب أفريقيا</option>
            <option value="كوريا الجنوبية">كوريا الجنوبية</option>
            <option value="جنوب السودان">جنوب السودان</option>
            <option value="إسبانيا">إسبانيا</option>
            <option value="سريلانكا">سريلانكا</option>
            <option value="السودان">السودان</option>
            <option value="سورينام">سورينام</option>
            <option value="سوازيلاند">سوازيلاند</option>
            <option value="السويد">السويد</option>
            <option value="سويسرا">سويسرا</option>
            <option value="سوريا">سوريا</option>
            <option value="طاجيكستان">طاجيكستان</option>
            <option value="تنزانيا">تنزانيا</option>
            <option value="تايلاند">تايلاند</option>
            <option value="توغو">توغو</option>
            <option value="تونجا">تونجا</option>
            <option value="ترينيداد وتوباغو">ترينيداد وتوباغو</option>
            <option value="تونس">تونس</option>
            <option value="تركيا">تركيا</option>
            <option value="تركمانستان">تركمانستان</option>
            <option value="توفالو">توفالو</option>
            <option value="أوغندا">أوغندا</option>
            <option value="أوكرانيا">أوكرانيا</option>
            <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة</option>
            <option value="المملكة المتحدة">المملكة المتحدة</option>
            <option value="الولايات المتحدة">الولايات المتحدة</option>
            <option value="أوروغواي">أوروغواي</option>
            <option value="أوزبكستان">أوزبكستان</option>
            <option value="فانواتو">فانواتو</option>
            <option value="فنزويلا">فنزويلا</option>
            <option value="فيتنام">فيتنام</option>
            <option value="اليمن">اليمن</option>
            <option value="زامبيا">زامبيا</option>
            <option value="زيمبابوي">زيمبابوي</option>
          </select>
            </div>
          </div>
          <div class="row m-0 accSetting">
            <p class="lead col-12 text-center">تسجيل كاطالب</p>
           <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="الاسم الاول">
            </div>
            <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="اسم الثاني">
            </div>
            <div class="col-sm-4 mt-3">
                  <input class="input-group p-3" type="text" placeholder="اسم العائلة">
            </div>
            <div class="col-12 mt-3">
  <input class="input-group p-3" type="text" placeholder="الدرجة العلمية">
                       </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="email" placeholder="بريدك الالكتروني">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="password" placeholder="كلمه السر">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="password" placeholder="تأكيد كلمة السر">
            </div>
            <div class="col-12 mt-3">
                  <input class="input-group p-3" type="tel" placeholder="رقم الهاتف">
            </div>
            <div class="col-12 mt-3">
             <select name="country" class="input-group p-3">
            <option value="" disabled selected>إختر</option>
            <option value="أفغانستان">أفغانستان</option>
            <option value="ألبانيا">ألبانيا</option>
            <option value="الجزائر">الجزائر</option>
            <option value="أندورا">أندورا</option>
            <option value="أنغولا">أنغولا</option>
            <option value="أنتيغوا وباربودا">أنتيغوا وباربودا</option>
            <option value="الأرجنتين">الأرجنتين</option>
            <option value="أرمينيا">أرمينيا</option>
            <option value="أستراليا">أستراليا</option>
            <option value="النمسا">النمسا</option>
            <option value="أذربيجان">أذربيجان</option>
            <option value="البهاما">البهاما</option>
            <option value="البحرين">البحرين</option>
            <option value="بنغلاديش">بنغلاديش</option>
            <option value="باربادوس">باربادوس</option>
            <option value="بيلاروسيا">بيلاروسيا</option>
            <option value="بلجيكا">بلجيكا</option>
            <option value="بليز">بليز</option>
            <option value="بنين">بنين</option>
            <option value="بوتان">بوتان</option>
            <option value="بوليفيا">بوليفيا</option>
            <option value="البوسنة والهرسك ">البوسنة والهرسك </option>
            <option value="بوتسوانا">بوتسوانا</option>
            <option value="البرازيل">البرازيل</option>
            <option value="بروناي">بروناي</option>
            <option value="بلغاريا">بلغاريا</option>
            <option value="بوركينا فاسو ">بوركينا فاسو </option>
            <option value="بوروندي">بوروندي</option>
            <option value="كمبوديا">كمبوديا</option>
            <option value="الكاميرون">الكاميرون</option>
            <option value="كندا">كندا</option>
            <option value="الرأس الأخضر">الرأس الأخضر</option>
            <option value="جمهورية أفريقيا الوسطى ">جمهورية أفريقيا الوسطى </option>
            <option value="تشاد">تشاد</option>
            <option value="تشيلي">تشيلي</option>
            <option value="الصين">الصين</option>
            <option value="كولومبيا">كولومبيا</option>
            <option value="جزر القمر">جزر القمر</option>
            <option value="كوستاريكا">كوستاريكا</option>
            <option value="ساحل العاج">ساحل العاج</option>
            <option value="كرواتيا">كرواتيا</option>
            <option value="كوبا">كوبا</option>
            <option value="قبرص">قبرص</option>
            <option value="التشيك">التشيك</option>
            <option value="جمهورية الكونغو الديمقراطية">جمهورية الكونغو الديمقراطية</option>
            <option value="الدنمارك">الدنمارك</option>
            <option value="جيبوتي">جيبوتي</option>
            <option value="دومينيكا">دومينيكا</option>
            <option value="جمهورية الدومينيكان">جمهورية الدومينيكان</option>
            <option value="تيمور الشرقية ">تيمور الشرقية </option>
            <option value="الإكوادور">الإكوادور</option>
            <option value="مصر">مصر</option>
            <option value="السلفادور">السلفادور</option>
            <option value="غينيا الاستوائية">غينيا الاستوائية</option>
            <option value="إريتريا">إريتريا</option>
            <option value="إستونيا">إستونيا</option>
            <option value="إثيوبيا">إثيوبيا</option>
            <option value="فيجي">فيجي</option>
            <option value="فنلندا">فنلندا</option>
            <option value="فرنسا">فرنسا</option>
            <option value="الغابون">الغابون</option>
            <option value="غامبيا">غامبيا</option>
            <option value="جورجيا">جورجيا</option>
            <option value="ألمانيا">ألمانيا</option>
            <option value="غانا">غانا</option>
            <option value="اليونان">اليونان</option>
            <option value="جرينادا">جرينادا</option>
            <option value="غواتيمالا">غواتيمالا</option>
            <option value="غينيا">غينيا</option>
            <option value="غينيا بيساو">غينيا بيساو</option>
            <option value="غويانا">غويانا</option>
            <option value="هايتي">هايتي</option>
            <option value="هندوراس">هندوراس</option>
            <option value="المجر">المجر</option>
            <option value="آيسلندا">آيسلندا</option>
            <option value="الهند">الهند</option>
            <option value="إندونيسيا">إندونيسيا</option>
            <option value="إيران">إيران</option>
            <option value="العراق">العراق</option>
            <option value="جمهورية أيرلندا ">جمهورية أيرلندا </option>
            <option value="فلسطين">فلسطين</option>
            <option value="إيطاليا">إيطاليا</option>
            <option value="جامايكا">جامايكا</option>
            <option value="اليابان">اليابان</option>
            <option value="الأردن">الأردن</option>
            <option value="كازاخستان">كازاخستان</option>
            <option value="كينيا">كينيا</option>
            <option value="كيريباتي">كيريباتي</option>
            <option value="الكويت">الكويت</option>
            <option value="قرغيزستان">قرغيزستان</option>
            <option value="لاوس">لاوس</option>
            <option value="لاوس">لاوس</option>
            <option value="لاتفيا">لاتفيا</option>
            <option value="لبنان">لبنان</option>
            <option value="ليسوتو">ليسوتو</option>
            <option value="ليبيريا">ليبيريا</option>
            <option value="ليبيا">ليبيا</option>
            <option value="ليختنشتاين">ليختنشتاين</option>
            <option value="ليتوانيا">ليتوانيا</option>
            <option value="لوكسمبورغ">لوكسمبورغ</option>
            <option value="مدغشقر">مدغشقر</option>
            <option value="مالاوي">مالاوي</option>
            <option value="ماليزيا">ماليزيا</option>
            <option value="جزر المالديف">جزر المالديف</option>
            <option value="مالي">مالي</option>
            <option value="مالطا">مالطا</option>
            <option value="جزر مارشال">جزر مارشال</option>
            <option value="موريتانيا">موريتانيا</option>
            <option value="موريشيوس">موريشيوس</option>
            <option value="المكسيك">المكسيك</option>
            <option value="مايكرونيزيا">مايكرونيزيا</option>
            <option value="مولدوفا">مولدوفا</option>
            <option value="موناكو">موناكو</option>
            <option value="منغوليا">منغوليا</option>
            <option value="الجبل الأسود">الجبل الأسود</option>
            <option value="المغرب">المغرب</option>
            <option value="موزمبيق">موزمبيق</option>
            <option value="بورما">بورما</option>
            <option value="ناميبيا">ناميبيا</option>
            <option value="ناورو">ناورو</option>
            <option value="نيبال">نيبال</option>
            <option value="هولندا">هولندا</option>
            <option value="نيوزيلندا">نيوزيلندا</option>
            <option value="نيكاراجوا">نيكاراجوا</option>
            <option value="النيجر">النيجر</option>
            <option value="نيجيريا">نيجيريا</option>
            <option value="كوريا الشمالية ">كوريا الشمالية </option>
            <option value="النرويج">النرويج</option>
            <option value="سلطنة عمان">سلطنة عمان</option>
            <option value="باكستان">باكستان</option>
            <option value="بالاو">بالاو</option>
            <option value="بنما">بنما</option>
            <option value="بابوا غينيا الجديدة">بابوا غينيا الجديدة</option>
            <option value="باراغواي">باراغواي</option>
            <option value="بيرو">بيرو</option>
            <option value="الفلبين">الفلبين</option>
            <option value="بولندا">بولندا</option>
            <option value="البرتغال">البرتغال</option>
            <option value="قطر">قطر</option>
            <option value="جمهورية الكونغو">جمهورية الكونغو</option>
            <option value="جمهورية مقدونيا">جمهورية مقدونيا</option>
            <option value="رومانيا">رومانيا</option>
            <option value="روسيا">روسيا</option>
            <option value="رواندا">رواندا</option>
            <option value="سانت كيتس ونيفيس">سانت كيتس ونيفيس</option>
            <option value="سانت لوسيا">سانت لوسيا</option>
            <option value="سانت فنسينت والجرينادينز">سانت فنسينت والجرينادينز</option>
            <option value="ساموا">ساموا</option>
            <option value="سان مارينو">سان مارينو</option>
            <option value="ساو تومي وبرينسيب">ساو تومي وبرينسيب</option>
            <option value="السعودية">السعودية</option>
            <option value="السنغال">السنغال</option>
            <option value="صربيا">صربيا</option>
            <option value="سيشيل">سيشيل</option>
            <option value="سيراليون">سيراليون</option>
            <option value="سنغافورة">سنغافورة</option>
            <option value="سلوفاكيا">سلوفاكيا</option>
            <option value="سلوفينيا">سلوفينيا</option>
            <option value="جزر سليمان">جزر سليمان</option>
            <option value="الصومال">الصومال</option>
            <option value="جنوب أفريقيا">جنوب أفريقيا</option>
            <option value="كوريا الجنوبية">كوريا الجنوبية</option>
            <option value="جنوب السودان">جنوب السودان</option>
            <option value="إسبانيا">إسبانيا</option>
            <option value="سريلانكا">سريلانكا</option>
            <option value="السودان">السودان</option>
            <option value="سورينام">سورينام</option>
            <option value="سوازيلاند">سوازيلاند</option>
            <option value="السويد">السويد</option>
            <option value="سويسرا">سويسرا</option>
            <option value="سوريا">سوريا</option>
            <option value="طاجيكستان">طاجيكستان</option>
            <option value="تنزانيا">تنزانيا</option>
            <option value="تايلاند">تايلاند</option>
            <option value="توغو">توغو</option>
            <option value="تونجا">تونجا</option>
            <option value="ترينيداد وتوباغو">ترينيداد وتوباغو</option>
            <option value="تونس">تونس</option>
            <option value="تركيا">تركيا</option>
            <option value="تركمانستان">تركمانستان</option>
            <option value="توفالو">توفالو</option>
            <option value="أوغندا">أوغندا</option>
            <option value="أوكرانيا">أوكرانيا</option>
            <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة</option>
            <option value="المملكة المتحدة">المملكة المتحدة</option>
            <option value="الولايات المتحدة">الولايات المتحدة</option>
            <option value="أوروغواي">أوروغواي</option>
            <option value="أوزبكستان">أوزبكستان</option>
            <option value="فانواتو">فانواتو</option>
            <option value="فنزويلا">فنزويلا</option>
            <option value="فيتنام">فيتنام</option>
            <option value="اليمن">اليمن</option>
            <option value="زامبيا">زامبيا</option>
            <option value="زيمبابوي">زيمبابوي</option>
          </select>
              
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <p class="text-left d-inline float-left">You Have An Account ? <a href="register.html"><small>Sign In</small></a></p>
          <p class="text-right d-inline float-right"><a href="register.html"><small>Forget Your Password</small></a></p>
          <div class="clearfix"></div>
        </div>
        <div class="col-12 mt-3">
          <button class="btn">Sign Up</button>
        </div>
      </div>
    </div>
  </section>
  <div class="clearfix"></div>
</main>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
<script type="text/javascript" src="js/function.js"></script>
</div>

);
}
}
export default ar-sign-up;