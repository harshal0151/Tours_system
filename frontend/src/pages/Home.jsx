import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import experienceImg from '../assets/images/experience1.jpg'

import Img02 from '../assets/images/fort1.jpg'
import heroImg001 from '../assets/images/hero.img001.jpg'
import heroImg002 from '../assets/images/hero.img002.jpg'
import heroImg003 from '../assets/images/hero.img003.jpg'


import Subtitle from '../component/shared/Subtitle'
import SearchBar from '../component/shared/SearchBar'
import FeaturedTourList from '../component/Featured-tours/FeaturedTourList'
import Testimonials from '../component/Testtimonial/Testimonials'
import Newsletter from '../component/shared/Newsletter'

import HeroSlider from '../component/UI/HeroSlider'
import FindCarForm from '../component/UI/FindCarForm'
import Helmet from '../component/Helmet/Helmet'
import TourSlider from '../component/UI/TourSlider'
import AboutSlider from '../component/UI/AboutSlider'
import HotelSlider from '../component/UI/HotelSlider'
import FeaturedProperties from '../component/featuredProperties/FeaturedProperties'
import Featured from '../component/featured-stays/Featured'
import CarItem from '../component/UI/CarItem'
import carData from '../assets/data/carData'
import ServiceList from '../assets/services/ServiceList'
import BlogList from '../component/UI/BlogList'

const Home = () => {
  return (
    <>{window.scrollTo(0, 0)}
<Helmet title="Home">  
      {/*      Hero section start      */}
      <TourSlider/>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">
                
                
                </div>
                <h1>Let us plan you a perfect India  {" "}
                  <span className="highlight"> Holidays</span>
                </h1>
                <p>
                  Some travel to learn more while some travel to take a break from their life. No matter the reason,
                  travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.
                  It is not the destination where you end up but the mishaps and memories you create along the way.

                </p>
              </div>
            </Col>

            <Col lg='4'>
              <div className="hero__img-box">
                <img src={heroImg001} alt="" />
              </div>
            </Col>

            <Col lg='4'>
              <div className="hero__img-box img-box ">
                <img src={heroImg002} alt="" />
              </div>
            </Col>

            <Col lg='4'>
              <div className="hero__img-box">
                <img src={heroImg003} alt="" />
              </div>
            </Col>
  
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*      Hero section end      */}

      


      {/*      Featured tour section start      */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle Subtitle={"Explore"} />
              <h2 className='featured__tour-title'> Tours packages </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            
            <Col lg='12' className='mb-5'>
              <h2 className='featured__tour-title'>Popular tour </h2>
            </Col>
            <FeaturedTourList />
            
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="3">
            <Subtitle Subtitle={"Services"} />
              <h2 className='services__title'> Hotels & Stays</h2>
            </Col>
          </Row>
        </Container>
        <HotelSlider/>
        <section>
 <div className="homeContainer">
   <Featured/>
   <h1 className="homeTitle">Homes guests love</h1>
   <FeaturedProperties/>
 </div>
 </section>

            
       
      </section>
      {/*      Featured tour section end  */}
   
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
       

     
   {/*      Car Rentals start      */}

      <section className="p-0 hero__slider-section">
         <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h2 className='featured__tour-title'>Car Rentals</h2>
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
        

      {/*      experience section start      */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle Subtitle={""} />

                <h2>
                  Waking up in India is like<br />  waking up to life itself.
                  <br />
                  <span className="highlight">India Tourism</span>
                </h2>
                <p>

                  <br />

                </p>
              </div>

            </Col>
            <Col lg='6'>
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
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-item-center">

                </div>
                <h1>Incredible  {" "}
                  <span className="highlight">India </span>
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
      </section>


      {/*      gallery section start      
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'Gallery'} />
              <h2 className='gallery__title'>Visit our tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section> 
      */}
      {/*      gallery section end      */}

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

      <section>
  <Container>
    <Row>
      <Col>
      <AboutSlider/>
      </Col>
    </Row>
  </Container>
 </section>
      {/*     testimoial section start      */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'India Love'} />
              <h2 className='testimonial__title'>Best tour places to visit</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/*     testimoial section end      */}

    
      <Newsletter />
      </Helmet>
    </>
  )
}

export default Home;