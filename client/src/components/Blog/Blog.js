import React, { useContext,useEffect } from 'react'
import './Blog.css'
import imageSakshi from '../../assets/images/sakshi.jpeg'
import blogContext from '../../context/blogContext'
import BlogCard from './BlogCard'
const Blog = () => {
const context = useContext(blogContext);
const {blogs,getAllBlogs} = context;
useEffect(() => {
  getAllBlogs();
},)

  return (
    <section className="why-us" id="blogs-section">
  <div className="container">
        <div className="row">
      <div className="col-md-8 offset-md-2">
        <h2 className="mt-5 text-center">Our Blogs</h2>
        <p className="mb-5 text-center">A one stop destination for all your thoughts! Have a look at what our bees want to express!</p>
      </div>
    </div>

    <section className="blogs-section">
     {blogs && blogs.map((blog)=>{
       return <BlogCard  key={blog._id} blog={blog} />
     })}
  </section>

  </div>
</section>
  )
}

export default Blog