import React from "react";
import Header from "./components/header/header.component"
import Navbar from "./components/navbar/navbar.component"
import Simulator from "./components/simulator/simulator.component";
import ContactForm from "./components/contact/contact.component"
import MapContainer from "./components/map/map.component"
import {Footer}  from "./components/footer/footer.component";

class Index extends React.PureComponent {
  render() {
    return (
       <div>
          <Navbar/>
          <Header/>
          <div className="content clearfix">
              <div className="container">
              <Simulator/>
              <MapContainer/>
              <ContactForm/>
              </div>
          </div>
          <Footer/>
       </div>
    );
  }
}

export default Index;
