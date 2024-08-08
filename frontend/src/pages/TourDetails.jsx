import React, { useRef, useState, useContext, useEffect } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../units/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../component/Booking/Booking';
import Newsletter from '../component/shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../units/config';
import { AuthContext } from '../context/AuthContext';
import LoadingImg from '../assets/all-images/blog-img/spin.svg';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch data from the database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
  }, [id]);

  // Destructure properties from the object if tour exists
  const { photo, title, description, price, address, reviews, city, distance, maxGroupSize } = tour || {};

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submit request to server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in');
        return;
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <section>
        <Container>
          {loading && (
            <div className='loader'>
              <img src={LoadingImg} alt='Loading...' />
            </div>
          )}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && tour && (
            <Row>
              <Col lg='8'>
                <div className="tour__content">
                  <img src={photo} alt={title} />

                  <div className="tour__info">
                    <h2>{title}</h2>

                    <div className="d-flex align-item-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i className="ri-star-s-fill" style={{ color: 'var(--secondary-color)' }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                      </span>
                      <span>
                        <i className="ri-map-pin-user-fill"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i>{city}
                      </span>
                      <span>
                        <i className="ri-hand-coin-fill"></i>₹{price}/ per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i>{distance} k/m
                      </span>
                      <span>
                        <i className="ri-group-line"></i>{maxGroupSize} people
                      </span>
                    </div>
                   <div className='description'>
                   <h5>Description</h5>
                    {description && description.length > 0 ? (
                      description.map((descObj, index) => (
                        <div key={index}>
                          <p>{descObj.desc}</p>
                          <p>{descObj.descSummary}</p>
                          <p><strong>Popular Spots:</strong> {descObj.descPopularSpots}</p>
                          <p><strong>History:</strong></p>
                          <ul>
                            {descObj.history.map((historyItem, idx) => (
                              <li key={idx}>{historyItem}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <p>No description available</p>
                    )}
                   </div>
                  </div>

                  {/* Tour reviews section */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <form onSubmit={submitHandler}>
                      <div className="d-flex align-item-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i className="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <i className="ri-star-fill"></i>
                        </span>
                      </div>

                      <div className="reviews__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button className='btn primary__btn text-white' type='submit'>
                          Submit
                        </button>
                      </div>
                    </form>

                    <ListGroup className='user__reviews'>
                      {reviews?.map((review, idx) => (
                        <div className="review__item" key={idx}>
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-item-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating}
                                <i className="ri-star-fill"></i>
                              </span>
                            </div>
                            <h5>{review.reviewText}</h5>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* Tour reviews section end */}
                </div>
              </Col>
              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetails;
