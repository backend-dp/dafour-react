import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
            {/* <!-- search Section !--> */}
    <section className="slideshow w-100 d-inline-block m-0 p-0">
        <div className="row m-0 p-0">
        <img className="d-block img-fluid w-100" src="../images/bg.jpg" alt="bg"  />
            <div className="search py-5 px-4">
                <p className="lead text-center">Lorem ipsum dolor sit amet,
                    dicta posidonium ea has, sea aeque facete constituam ut.</p>
                <div className="col-12">
                    <input className="input-group p-3" placeholder="Write Your Keywords" alt="altImage" />
                </div>
                <div className="row m-0 py-3">
                    <div className="col-md-4">
                        <select className="p-3">
                            <option>Education type ....</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="p-3">
                            <option>Choose location ....</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="p-3">
                            <option>Choose School ....</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn">Search</button>
                </div>
            </div>
        </div>
    </section>
    <div className="clearfix"></div>
      </div>
    )
  }
}
