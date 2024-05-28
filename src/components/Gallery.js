import React from "react";
import gallerij1 from "../assets/gallerij1.jpg";
import gallerij2 from "../assets/gallerij2.jpg";
import gallerij3 from "../assets/gallerij3.jpg";
import gallerij4 from "../assets/gallerij4.jpg";
import gallerij5 from "../assets/gallerij5.png";
import gallerij6 from "../assets/gallerij6.png";
import gallerij7 from "../assets/gallerij7.png";
import gallerij8 from "../assets/gallerij8.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Gallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slideToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="gallery-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        <div className="card">
          <img src={gallerij1} alt="gym pic" />
        </div>
        <div className="card">
          <img src={gallerij5} alt="gym pic" />
        </div>
        <div className="card">
          <img src={gallerij2} alt="gym pic" />
        </div>
        <div className="card">
          <img src={gallerij6} alt="gym pic" />
        </div>
        <div className="card">
          <img src={gallerij3} alt="gym pic" />
        </div>

        <div className="card">
          <img src={gallerij7} alt="gym pic" />
        </div>
        <div className="card">
          <img src={gallerij4} alt="gym pic" />
        </div>

        <div className="card">
          <img src={gallerij8} alt="gym pic" />
        </div>
      </Carousel>
    </div>
  );
}
