import React, { useState, useEffect, useRef } from 'react';
import "../styles/tours.css";
import LoadingImg from '../assets/all-images/blog-img/spin.svg';
import TourPoster from "../../src/assets/all-images/tout-services/tourposter.jpg"
import Subtitle from '../component/shared/Subtitle';
import TourCard from '../component/shared/TourCard';
import Newsletter from '../component/shared/Newsletter';
import SearchBar from '../component/shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';
import Testimonials from '../component/Testtimonial/Testimonials';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../units/config';
import AboutSlider from "../component/UI/AboutSlider";
import MasonryImagesGallery from "../component/Image-gallery/MasonryImagesGallery";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const containerRef = useRef(null);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); // backend data count
    setPageCount(pages);
  }, [tourCount]);

  const handlePageChange = (number) => {
    setPage(number);
    scrollToCenter();
  };

  const scrollToCenter = () => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const scrollPosition = containerRef.current.offsetTop + containerHeight / 2 - window.innerHeight / 2;
      const slightlyAboveScrollPosition = scrollPosition - 300; // Adjust this value as needed
      window.scrollTo({
        top: slightlyAboveScrollPosition,
        behavior: "smooth"
      });
    }
  };
  

  return (
    <>
       <section>
        <Container>
          <Row>
            <img src= {TourPoster} alt=''></img>
          </Row>
        </Container>
       </section>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section ref={containerRef}>
        <Container>
          {loading && (
            <div className=' loader  '>
              <img src={LoadingImg} alt='Loading...' />
            </div>
          )}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg='3' mb='6' sm='6' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
                <div className="pagination d-flex align-item-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
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
      <AboutSlider />
      <Newsletter />
    </>
  );
};

export default Tours;
