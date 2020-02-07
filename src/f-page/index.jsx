import React from "react";
import Header from "./components/header/header.component"
import Navbar from "./components/navbar/navbar.component"

class Index extends React.PureComponent {
  render() {
    return (
       <div>
          <Navbar/>
          <Header/>
       </div>
    );
  }
}

export default Index;
