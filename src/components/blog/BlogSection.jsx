import React from 'react'
import { BlogDiv } from './stylesheet'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import BlogCard from './BlogCard';

const BlogSection = () => {

    const scrollR=()=>{
        const comp = document.querySelector('.body');
        comp.scrollBy(280,0);
    }
    const scrollL=()=>{
        const comp = document.querySelector('.body');
        comp.scrollBy(-280,0);
    }
    
  return (
    <BlogDiv>
        <section className="header">
            <h1>BLOG</h1>
            <div className="next-prev">
                <ArrowCircleLeftIcon className='icons next' fontSize='large' onClick={scrollL}/>
                <ArrowCircleRightIcon  className='icons prev' fontSize='large' onClick={scrollR}/>
            </div>
        </section>
        
        <h3 className="section-name">Blog Section</h3>

        <section className="body">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>

        </section>
    </BlogDiv>
  )
}

export default BlogSection