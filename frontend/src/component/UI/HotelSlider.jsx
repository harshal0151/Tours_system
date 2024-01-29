import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hotel-slider.css";

const HotelSlider = () => {
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
      <div className="slider_item slider_item-05 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Find your next stay Search low prices on hotels</h4>
            <h1 className="text-light mb-4">Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/Stays">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-06 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Find your next stay Search low prices on hotels</h4>
            <h1 className="text-light mb-4">Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/Stays">Book Now </Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-07 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Find your next stay Search low prices on hotels</h4>
            <h1 className="text-light mb-4"> Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/Stays">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-08 mt0">
        <Container>
          <div className="slider_content ">
            <h4 className="text-light mb-3">Find your next stay Search low prices on hotels</h4>
            <h1 className="text-light mb-4"> Book Now and Get 50% Off </h1>

            <button className="btn reserve_btn mt-4">
              <Link to="/Stays">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HotelSlider;
