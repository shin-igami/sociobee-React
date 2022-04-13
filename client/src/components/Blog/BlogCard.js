import React from 'react'
import './Blog.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import blogContext from '../../context/blogContext';
const BlogCard = (props) => {
const {blog} = props;
const context = useContext(blogContext)
const {previousCardData} = context;
function limitWord(myString){
  return `${myString
    .replace(/\s+/g, ' ') // remove extra spaces between words
    .split(' ')           // split string into array (using spaces as seperator)
    .splice(0, 10)     // splice the array to the desired word limit
    .join(' ')}...`;           // join it back into string (using spaces as seperator)
 }
  return (
    <div className="blog-card">
    <img src={`/uploads/${blog.image}`} className="blog-image" alt=""/>
    <p class="card-text"><small class="text-muted">by {blog.userName?blog.userName:"Unknown"} on {new Date(blog.date).toDateString()}</small></p>
    <h1 className="blog-title">{blog.title}</h1>
    <p className="blog-overview">{limitWord(blog.description)}</p>
    <Link  to={`/blog`} className="btn dark" onClick={(() => previousCardData(blog) )}>Read</Link>
</div>
  )
}

export default BlogCard