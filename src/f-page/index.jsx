import React from "react";
import Header from "./components/header/header.component"
import Navbar from "./components/navbar/navbar.component"
import Simulator from "./components/simulator/simulator.component";
import ContactForm from "./components/contact/contact.component"
import MapContainer from "./components/map/map.component"

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
       </div>
    );
  }
}

export default Index;
