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

            </div>
        </div>
    </div>

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