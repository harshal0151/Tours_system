import React from 'react'
import TourCard from '../shared/TourCard'
import { Col } from 'reactstrap'
import LoadingImg from '../../assets/all-images/blog-img/spin.svg'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../units/config'

function PopularTours() {
    const { data:popularTours,loading ,error}= useFetch (
        `${BASE_URL}/tours/search/getPopularTour`
      );
      console.log(popularTours);
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
      !loading && !error && popularTours?.map(tour=> (
         <Col lg='3'md='6' sm='6' className='mb-4' key={tour._id}>
           <TourCard tour={tour} />
         </Col>
       ))}
   </>
  )
}

export default PopularTours