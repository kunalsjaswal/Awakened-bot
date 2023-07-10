import React from 'react'
import cod from '../../images/call-of-duty.png'

const BlogCard = () => {
  return (
    <div className='blog-card'>
        <img src={cod} alt="blog-img" />
        <button>WEBSITE LINK</button> <span>23-11-2022</span>
        <p>Lorem ipsum dolor, sit  adipisicing elit. Vel quis voluptatum nulla, consequatur incidunt non aspernatur nam dolorum officiis quibusdam.</p>

    </div>
  )
}

export default BlogCard