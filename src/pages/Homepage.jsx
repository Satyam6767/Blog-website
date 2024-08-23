import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import image1 from "../assets/residential/image1.jpeg"
import image2 from "../assets/residential/image2.jpg"
import image3 from "../assets/residential/image3.jpeg"
import BlogCard from '../components/BlogCard'





function Homepage() {

  

    const [blogs] = useState([
        {id: 1 , imageUrl: image1, title:"this is 1st blog" , paragraph:"this is paragraph of first blog"},
         {id: 2 , imageUrl: image2, title:"this is 2nd blog" , paragraph:"this is paragraph of first blog"},
         {id: 3 , imageUrl: image3, title:"this is 3rd blog" , paragraph:"this is paragraph of first blog"},
        
    ])




  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="New">
        {blogs.map(blog =>(
            <BlogCard 
                imageUrl={blog.imageUrl}
                title={blog.title}
                paragraph={blog.paragraph}
                id={blog.id}
                key={blog.id}
            
            
            
            
            
            />

        ))}
        </div>
      
    </div>
  )
}

export default Homepage
