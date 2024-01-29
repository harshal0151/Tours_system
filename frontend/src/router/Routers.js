  

  import React from 'react'
  import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import About from '../pages/About'
import Services from '../pages/Services'
import Hotel from '../pages/Hotel'
import List from '../pages/List'

import CarRentals from "../pages/CarRentals";
import CarRentAbout from "../pages/CarRentAbout";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Stays from '../pages/Stays'





  const Routers = () => {
    return (
      <Routes>
      <Route path= '/' element ={ <Navigate to= '/home'/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/tour/:id' element={<TourDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/thank-you' element={<ThankYou/>} />
      <Route path='/tour/search' element={<SearchResultList/>} />
       
       <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/Stays" element={<Stays />} />
        
      <Route path="/CarRent" element={<CarRentals />} />
      <Route path="/CarRentAbout" element={<CarRentAbout />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />

  
      </Routes>
    )
  }
  
  export default Routers 