import React from "react";
import Header from "./components/header/header.component"
import Navbar from "./components/navbar/navbar.component"
import Simulator from "./components/simulator/simulator.component";

class Index extends React.PureComponent {
  render() {
    return (
       <div>
          <Navbar/>
          <Header/>
          <Simulator/>
       </div>
    );
  }
}

export default Index;
