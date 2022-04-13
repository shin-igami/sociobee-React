import BlogContext from "./blogContext";
import { useState } from "react";
import api from '../components/api/blogs'
const BlogState = (props) => {

    const initialBlogs = []
    const [blogs, setBlogs] = useState(initialBlogs)
    const [userBlogs, setUserBlogs] = useState("")
    const [user,setUser] = useState("")
    const [previousData,setPreviousData] = useState(null)

const previousCardData =(data)=>{
    setPreviousData(data)
}
    //Get All Note

const retrieveAllBlogs = async () => {
    const headers= {
        'Content-Type': 'application/json',
    }
    const response =await api.get("/blog/fetchallblogs")
    return response.data.Blog;
}

const getAllBlogs = async()=>{
    const allBlogs = await retrieveAllBlogs();
    if(allBlogs){
        setBlogs(allBlogs)
    }
}
//add a blog
const addABlog = async(values) =>{
    const  headers = {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
    }
    const response = await api.post("/blog/addblog",values,{headers})
    setBlogs(blogs.concat(response.data))
}
 //delete a card
 const removeBlog = async (id) => {
    await api.delete(`/blog/deletenote/${id}`);
    const newData = blogs.filter((e) => {
      return e.id !== id;
    });
    setBlogs(newData);
  }
 //edit a blog
 const updateBlog = async (values) => {
    const  headers = {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
    }
    const response = await api.put(`/blog/updateblog/${previousData._id}`, values,{headers})
    const { _id } = response.data;
    setBlogs( blogs&&
        blogs.map((value) => {
        return value._id === _id ? { ...response.data } : value
      })
    )
  }
    return (
        <BlogContext.Provider value={{getAllBlogs, blogs,addABlog,userBlogs,removeBlog,previousCardData,updateBlog,previousData,setBlogs}}>
            {props.children}
        </BlogContext.Provider>
    )

}



export default BlogState;
