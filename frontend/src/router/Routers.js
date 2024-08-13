import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import About from "../pages/About";
import Services from "../pages/Services";
import FoodAi from "../component/Ai/FoodAi"

import NotFound from "../pages/NotFound";

import CarRentals from "../pages/CarRentals";
import CarRentAbout from "../pages/CarRentAbout";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";

import Contact from "../pages/Contact";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Ai" element={<FoodAi />} />
     
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      <Route path="*" element={<NotFound />} />

    
  

      <Route path="/CarRent" element={<CarRentals />} />
      <Route path="/CarRentAbout" element={<CarRentAbout />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
