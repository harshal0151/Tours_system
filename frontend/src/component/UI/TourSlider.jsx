import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/tour-slider.css";

const TourSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Let us plan you a perfect India Holiday India Holiday</h4>
            <h1 className="text-light mb-4">Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/tours">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Let us plan you a perfect India Holiday India Holiday</h4>
            <h1 className="text-light mb-4">Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/tours">Book Now </Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Let us plan you a perfect India Holiday India Holiday</h4>
            <h1 className="text-light mb-4"> Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/tours">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-04 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Let us plan you a perfect India Holiday India Holiday</h4>
            <h1 className="text-light mb-4"> Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/tours">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default TourSlider;
