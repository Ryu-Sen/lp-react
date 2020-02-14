import React from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';

import offices from "./officeImages"
import '@brainhubeu/react-carousel/lib/style.css';


class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 };
  }

  onChange = (value) => {
    this.setState({ value });
  }
 

  render() {
    return (
    <div>
      <Carousel
        autoPlay={5000}
        animationSpeed={1000}
        slidesPerPage={3}
        keepDirectionWhenDragging
        infinite
        value={this.state.value}
        onChange={this.onChange}
        slides={offices.map(office=>
         <img style={{"margin-bottom":"100px"}} src={office.src} alt={office.title}  height="200" width="200"/>
         )}
  
        clickToChange
      />
    </div>
    );
  }
}
export default MyCarousel