import React from "react";
import { Carousel } from "antd";

import "./styles.css";

const images = ["image_one", "image_two", "image_three", "image_four"];

const ListCarousel = () => {
  return (
    <Carousel autoplay className="carousel">
      {images.map((image, i) => (
        <img
          key={i}
          src={require(`../assets/listimages/${image}_edited.jpg`)}
          alt={`${i + 1}`}
          title={`${i + 1}`}
          className="carousel-img"
        />
      ))}
    </Carousel>
  );
};

export default ListCarousel;
