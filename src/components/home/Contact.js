import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
            {/* <!-- Contact Section !--> */}
            <div className="backimg w-100 d-inline-block mt-3" id="contact">
            <section className="contact">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-capitalize">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w90">
                    <div className="row">
                        <div className="col-md-6 px-3">
                            <form className="text-center">
                                <div className="form-group">
                                    <input type="text" className="form-control p-3 contact-input" id="InputName"
                                        placeholder="Your Name.." />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-3 contact-input" id="InputEmail1"
                                        placeholder="Enter E-mail.." />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-3 contact-input" id="Textarea" rows="7" placeholder="Your Message.."></textarea>
                                </div>
                                <button type="submit" className="btn m-auto text-center">Send</button>
                            </form>
                        </div>
                        <div className="col-md-6 px-3">
                            <div className="location-map">
                                <p className="lead  contact-information">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,
                                    sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.</p>
                            </div>
                            <div className="p-3">
                                <p className="lead contact-information"><img alt="alt" src="/images/envelope.png" /> info@Dafour.net</p>
                                <p className="lead contact-information"><img alt="alt" src="/images/placeholder.png" /> Lorem ipsum
                                    dolor
                                    sit amet</p>
                                <p className="lead contact-information"><img alt="alt" src="/images/smartphone.png" /> +96
                                    (1234567891) +96
                                    (1234567891)</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center align-items-center">
                            <ul className="list-inline text-center align-self-center align-items-center">
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="/images/facebook.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="/images/twitter.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="/images/instagram.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="/images/linkedin.png" /></li>
                                <li className="list-inline-item m-0 p-3"><img alt="alt" src="/images/youtube.png" /></li>
                            </ul>
                            <p className="lead text-center contact-information p-0 mb-5">All copyrights reserved © Dafour
                                2018</p>
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
