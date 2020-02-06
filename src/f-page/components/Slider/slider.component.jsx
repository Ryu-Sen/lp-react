import React from 'react';
import { Zoom  } from 'react-slideshow-image';
import "./slider.styles.css" 

 
const images = [
  './images/slide_5.jpg',
  './images/slide_6.jpg',
  './images/slide_7.jpg',
  './images/slide_7.jpg'
];
 

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((img, index) => <img key={index} style={{width: "100%"}} src={img} alt="properties" />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow