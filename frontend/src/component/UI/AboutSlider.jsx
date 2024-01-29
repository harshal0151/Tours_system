import React from "react";

import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"


import Img01 from '../../assets/images/hero.img01.jpg'
import Img02 from '../../assets/images/fort1.jpg'
import Img03 from '../../assets/images/raj1.jpg'
import Img04 from '../../assets/images/peacock1.jpg'
import Img05 from '../../assets/images/goa.jpg'
import Img06 from '../../assets/images/puja.jpg'




const AboutSlider = () => {
  const settings = {
    fade: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item ">
      <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About Incredible  {" "}
                  <span className="highlight">India</span>
                </h1>
                <p >
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img06} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="slider_item ">
      <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About incredible    {" "}
                  <span className="highlight">Wildlife </span>
                </h1>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img04} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="slider_item ">
      <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About   {" "}
                  <span className="highlight">Goa </span>
                </h1>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img05} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="slider_item ">
      
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About   {" "}
                  <span className="highlight">kerala</span>
                </h1>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img01} alt="" />
              </div>
            </Col>


          </Row>
        </Container>
      </div> 

      <div className="slider_item ">
      
      <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About   {" "}
                  <span className="highlight">Rajasthan desert </span>
                </h1>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img03} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
    </div>

    <div className="slider_item ">
      
    <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>About  {" "}
                  <span className="highlight">Maharashtra </span>
                </h1>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.

                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

                  The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

                </p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="experience__img">
                <img src={Img02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
    </div>

    </Slider>
  );
};

export default AboutSlider;
