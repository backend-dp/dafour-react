import React, { Component } from 'react'

export default class Payment extends Component {
  render() {
    let myStyle = {
        width: "100px", 
        height: "auto",
    }
    return (
      <div>
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content text-center">
                <div className="modal-header text-center font-weight-bold mb-2">
                    <a href="#test"className="backto">back</a><strong className="text-center w-100"> خيارات الدفع</strong>
                </div>
                <div className="row text-center py-3 m-0 choosepayment">
                    <div className="col">
                        <a href="#test" id="sadadtransfer">
                            <img alt="alt" className="default-img" src="images/sadad-grey.png" style={myStyle} />
                            <img alt="alt" className="hover-img" src="images/sadad-blue.png" style={myStyle} />
                            <p className="font-weight-bold py-2">حساب سداد</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="paypal">
                            <img alt="alt" className="default-img" src="images/paypal-grey.png" />
                            <img alt="alt" className="hover-img" src="images/paypal-blue.png" />
                            <p className="font-weight-bold py-2">PayPal</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="creditcard">
                            <img alt="alt" className="default-img" src="images/credit-card-grey.png" />
                            <img alt="alt" className="hover-img" src="images/credit-card-blue.png" />
                            <p className="font-weight-bold py-2">البطاقة الائتمانية</p>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#test" id="banktransfer">
                            <img alt="alt" className="default-img" src="images/bank-grey.png" />
                            <img alt="alt" className="hover-img" src="images/bank-blue.png" />
                            <p className="font-weight-bold py-2">التحويل البنكى</p>
                        </a>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 creditcard paymentStep2">
                    <div className="col">
                        <form>
                            <div className="row">
                                    <h3 className="text-center w-100 font-weight-bold">البطاقة الائتمانية</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم البطاقة" />
                                </div>
                                <div className="col-8 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....تاريخ الإنتهاء" />
                                </div>
                                <div className="col-4 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="الكود"/>
                                </div>
                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">إضافة</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 sadadtransfer paymentStep2">
                    <div className="col">
                        <form>
                            <div className="row">
                                <h3 className="text-center w-100 font-weight-bold">حساب سداد</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم البطاقة"/>
                                </div>

                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">دفع</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="row text-center py-3 m-0 banktransfer paymentStep2">
                    <div className="col-12">
                        <form className="bankTransferForm">
                            <div className="row">
                                <h3 className="text-center w-100 font-weight-bold">التحويل البنكى</h3>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="الاسم..." />
                                </div>
                                <div className="col-12 my-1">
                                    <input className="p-2 w-100" type="text" placeholder="....رقم الحساب"/>
                                </div>
                                <div className="col-12 my-1">
                                    <button className="btn btn-md px-3">اظهار ارقام الحسابات</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 py-2 bankAccounts">
                        <table className="table table-striped">
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
<div className="modal-footer text-center d-block">
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <img alt="alt" className="img-thumbnail" src="images/discover.png"/>
  </li>
  <li className="nav-item">
   <img alt="alt" className="img-thumbnail" src="images/visa.png"/>
  </li>
  <li className="nav-item">
   <img alt="alt" className="img-thumbnail" src="images/master-card.png"/>
  </li>

</ul>
      </div>
            </div>
        </div>
    </div>

      </div>
    )
  }
}
