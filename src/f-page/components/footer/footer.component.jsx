import React from 'react';
import "./footer.styles.css";

export const Footer = ()=>{
  return (
    <div>
        <section id="footer">
          <div className="container">
              <img
                src={require("../../../assets/logo.png")}
                alt="logo"
                title="logo"
              />
            <div>
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://lsirglobal.com">Home</a></li>
                <li><a href="https://lsirglobal.com/about">About</a></li>
                <li><a href="https://lsirglobal.com/Our Brand">Our Brand</a></li>
                <li><a href="https://lsirglobal.com/properties">Properties</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="/"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="/"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="/"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="/"><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="/" target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
              <hr></hr>
            </div>	
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href="https://lsirglobal.com/">List Sotheby`s</a></u> </p>
              </div>
              <hr></hr>
            </div>	
          </div>
	      </section>
    </div>
  )
}