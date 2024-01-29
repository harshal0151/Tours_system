import React from "react";

import HeroSlider from "../component/UI/HeroSlider";
import Helmet from "../component/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../component/UI/FindCarForm";
import AboutSection from "../component/UI/AboutSection";
import ServicesList from "../component/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../component/UI/CarItem";
import BecomeDriverSection from "../component/UI/BecomeDriverSection";


import BlogList from "../component/UI/BlogList";
import CarRentHeader from "../component/CarRent-Header/CarRentHeader";

const CarRentals = () => {
  return (
    <Helmet title="Home">
       <CarRentHeader />
      
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />


      {/* =============== blog section =========== 
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section_subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
      */}
    </Helmet>
  );
};

export default CarRentals;
