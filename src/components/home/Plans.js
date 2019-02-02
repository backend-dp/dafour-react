import React, { Component } from 'react';


export default class Plans extends Component {


  render() {
    return (
      <div>
        {/* <!-- Plans Section !--> */}
        <div className="backimg w-100 d-inline-block" id="cmc">
            <section className="cmc-project w90">
                <h1 className="text-center p-4">Our Plans</h1>
                <div className="row m-0 align-items-center">
                    <div className="col-md-12 text-center align-items-center">
                        <ul className="list-inline text-center align-self-center align-items-center list-items plan-list">
                            <li className="list-inline-item m-0 p-3 list-items-active font-weight-bold" id="planType">Public
                                Education
                            </li>
                            <li className="list-inline-item m-0 p-3 font-weight-bold" id="accSetting">University &
                                Technical
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-2 text-center" id="planTabs">
                    <div className="container planType">
                        <div className="row my-4">
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 1</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan active-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
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
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan active-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 2</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card m-1 card-plan">
                                    <div className="card-block my-3 p-5">
                                        <h1><b>Plan 3</b></h1>
                                        <br />
                                        <p><b>5</b> Number of Memos</p>
                                        <hr />
                                        <p><b>5</b> Number of Documents</p>
                                        <hr />
                                        <p><b>3</b> Month Subscription</p>
                                        <hr />
                                        <p><b>40</b> SAR</p>
                                        <hr />
                                    </div>
                                    <div className="card-block w-100 p-0"><a href="#test" data-toggle="modal" data-target=".bd-example-modal-lg"
                                            className="btn btn-secondary w-100 font-weight-bold">Buy
                                            Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="clearfix"></div>


      </div>
    )
  }
}
