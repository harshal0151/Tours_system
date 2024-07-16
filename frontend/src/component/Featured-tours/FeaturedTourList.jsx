

import React from 'react'
import TourCard from '../shared/TourCard'
import { Col } from 'reactstrap'
import LoadingImg from '../../assets/all-images/blog-img/spin.svg'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../units/config'

const FeaturedTourList = () => {
  const { data:featuredTours, loading, error}= useFetch (
    `${BASE_URL}/tours/search/getFeaturedTours`
  );


  return (
    <>
     {loading && (
        <div className='loader'>
          <img  src= {LoadingImg} alt='Loading...' />
        </div>
      )}
      {error && <h4 className='text-center pt-5'>{error}</h4>
      }
 
      {
       !loading && !error && featuredTours?.map(tour=> (
          <Col lg='3'md='6' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  )
}

export default FeaturedTourList