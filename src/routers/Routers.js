import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx"
import About from "../pages/About"
import CarListing from '../pages/CarListing.jsx'
import CarDetails from '../pages/CarDetails'
import BlogDetails from '../pages/BlogDetails.jsx'
import Blog from '../pages/Blog.jsx'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound.jsx'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home'/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cars" element={<CarListing/>}/>
      <Route path="/cars/:slug" element={<CarDetails/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/blogs/:slug" element={<BlogDetails/>}/>
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers
