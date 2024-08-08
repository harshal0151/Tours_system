import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import experienceImg from "../assets/images/experience1.jpg";

import heroImg001 from "../assets/images/hero.img001.jpg";
import heroImg002 from "../assets/images/hero.img002.jpg";
import heroImg003 from "../assets/images/hero.img003.jpg";

import Subtitle from "../component/shared/Subtitle";
// import SearchBar from "../component/shared/SearchBar";
import FeaturedTourList from "../component/Featured-tours/FeaturedTourList";
import Testimonials from "../component/Testtimonial/Testimonials";
import Newsletter from "../component/shared/Newsletter";

import Helmet from "../component/Helmet/Helmet";
import TourSlider from "../component/UI/TourSlider";
import AboutSlider from "../component/UI/AboutSlider";
import BlogList from "../component/UI/BlogList";
import PopularTours from "../component/popular-tours/PopularTours";
import Services from "../component/services/Services";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {window.scrollTo(0, 0)}
      <Helmet title="Home">
        {/*      Hero section start      */}
        <TourSlider />
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-item-center"></div>
                  <h1>
                    Let us plan you a perfect India{" "}
                    <span className="highlight"> Holidays</span>
                  </h1>
                  <p>
                    Some travel to learn more while some travel to take a break
                    from their life. No matter the reason, travelling opens a
                    big door for us to explore the world beyond our imagination
                    and indulge in many things. It is not the destination where
                    you end up but the mishaps and memories you create along the
                    way.
                  </p>
                </div>
              </Col>

              <Col lg="4">
                <div className="hero__img-box">
                  <img src={heroImg001} alt="" />
                </div>
              </Col>

              <Col lg="4">
                <div className="hero__img-box img-box ">
                  <img src={heroImg002} alt="" />
                </div>
              </Col>

              <Col lg="4">
                <div className="hero__img-box">
                  <img src={heroImg003} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section>
          <Container>
            <Row>
              <Col lg="12"></Col>
              <SearchBar />
            </Row>
          </Container>
        </section> */}

        {/*      Hero section end      */}

        {/*      Featured tour section start      */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <Subtitle Subtitle={"Explore"} />
         <div className="title_div">
         <h2 className="featured__tour-title"> Tours packages </h2>
        <Link to="/tours"  className="links"> <p>see more </p></Link>
         </div>
              </Col>
              <FeaturedTourList />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
              <div className="title_div">
                <h2 className="featured__tour-title">Popular tour </h2>
               <Link to="/tours" className="links"> <p>see more </p></Link>
              </div>
              </Col>
              <PopularTours />
            </Row>
          </Container>
        </section>

        {/*      Featured tour section end  */}

        {/*      Car Rentals start      */}

        {/* <section className="p-0 hero__slider-section">
          <Container>
            <Row>
              <Col lg="12" className="mb-2">
              <Subtitle Subtitle={"Services"} />
                <h2 className="featured__tour-title">Car Rentals</h2>
              </Col>
            </Row>
          </Container>
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

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center ">
                <h6 className="section_subtitle">Come with</h6>
                <h2 className="section__title">Hot Offers</h2>
              </Col>
              {carData.slice(0, 6).map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="3">
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className="services__title">We offer our best services</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
        </section> */}

        <section>
          <Container>
            <Row>
              <Col>
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-item-center"></div>
                  <h1>
                    Experience Our Best {" "}
                    <span className="highlight">services</span>
                  </h1>
                  <p>
                    Our services include experienced tour guides, tailored
                    travel plans, and seamless reservation management. Whether
                    you're traveling to learn or to take a break, we ensure your
                    journey is memorable and well-organized. It's not just about
                    the destination, but the experiences and memories you create
                    along the way.
                  </p>
                </div>
                <Services />
              </Col>
            </Row>
          </Container>
        </section>

        {/*      experience section start      */}
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience__content">
                  <Subtitle Subtitle={""} />

                  <h2>
                    Waking up in India is like
                    <br /> waking up to life itself.
                    <br />
                    <span className="highlight">India Tourism</span>
                  </h2>
                  <p>
                    <br />
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/*      experience section end      */}

        <section>
          <Container>
            <Row>
              <Col>
                <AboutSlider />
              </Col>
            </Row>
          </Container>
        </section>

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

        {/*     testimoial section start      */}

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle Subtitle={"India Love"} />
                <h2 className="testimonial__title">
                  Best tour places to visit
                </h2>
              </Col>
              <Col lg="12">
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>
        {/*     testimoial section end      */}

        <Newsletter />
      </Helmet>
    </>
  );
};

export default Home;
