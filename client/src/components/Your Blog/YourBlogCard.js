import React,{useContext} from 'react'
import './YourBlog.css'
import { Link } from 'react-router-dom';
import blogContext from '../../context/blogContext';
const YourBlogCard = (props) => {
const {blog} = props;
const context = useContext(blogContext)
const {removeBlog,previousCardData} = context;
const handleClick = () =>{
  removeBlog(blog._id);
}
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
    <Link to="/updateblog" type="button" class="btn btn-primary" onClick={(() => previousCardData(blog) )}>Edit</Link>
    <button onClick={handleClick} type="button" class="btn btn-danger">Delete</button>
</div>
  )
}

export default YourBlogCard