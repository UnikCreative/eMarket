import React from 'react'
import { Link } from 'react-router-dom';
import Blog1 from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src={Blog1} className='img-fluid w-100' alt='blog' />
            </div>

            <div className='blog-content'>
                <p className='date'>1 March, 2023</p>
                <h5 className='title'> A beautiful Sunday morning renaissance</h5>
                <p className='desc'> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
                <Link to="/blog/:id" className='button'> Read More</Link>
            </div>
        </div>
   
  )
}

export default BlogCard