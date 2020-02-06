import React from "react";
import Slider from "./components/Slider/slider.component"
import Navbar from "./components/navbar/navbar.component"

class Index extends React.PureComponent {
  render() {
    return (
       <div>
          <Navbar/>
          <Slider/>
          <h1>Hello</h1>
       </div>
    );
  }
}

export default Index;
