// import React, { useState } from 'react'
// import { Container, Row, Col } from 'reactstrap';
  
// // import CommonSection from '../component/shared/CommonSection';
// import { useLocation } from 'react-router-dom';
// import TourCard  from '../component/shared/TourCard';

// const SearchResultList = () => {

//  const location = useLocation()
//  window.scrollTo(0,0)

//  const [data] = useState(location.state)

//  console.log(data)
//   return (
//     <>
//     {/* <CommonSection title={"Tour Search Result"}/> */}
//     <section>
//       <Container>
//         <Row>
//           {
//             data.length ===0 ?(
//             <h4 className='text-center'>No tour found</h4>
//             ) : (
//               data ?.map (tour => (
//                 <Col lg= "3" className='mb-4' key={tour._id}>
//                   <TourCard tour = {tour}/>
//                   </Col>
//               ))
//           )} 
//         </Row>
//       </Container>
//     </section>
   
  
//     </>
//   )
// }

// export default SearchResultList;