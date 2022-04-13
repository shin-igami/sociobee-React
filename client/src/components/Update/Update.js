import React,{useEffect} from 'react'
import './Update.css'
import uploadPng from '../../assets/images/upload.png'
import { useContext, useState } from 'react'
import blogContext from '../../context/blogContext'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const context = useContext(blogContext)
  const { updateBlog, previousData } = context
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate();
  useEffect( () => {
    if(previousData){
      setDescription(previousData.description)
    setTitle(previousData.title)
    setImage(previousData.image)
    }
  }, [previousData])
  
  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)
    formData.append("description", description)
    console.log(formData);
    updateBlog(formData)
  navigate("/yourblogs")
    
  }
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: 'Upload an Image'
  });
  const onChange = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name
      });
    }
    setImage(e.target.files[0])
  }


  return (
    <form encType="multipart/form-data" >
       <div class="banner">
       <img src={src?src:`/uploads/${image}`} alt={alt} />
    </div>
      <div class="blog">
        <textarea type="text" class="title" placeholder="Blog title..." name='title' value={title} onChange={(e) => {setTitle(e.target.value)}}></textarea>
        <textarea type="text" class="article" placeholder="Start writing here..." name='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div class="blog-options">
        <button class="btn dark publish-btn" onClick={handleClick}>publish</button>
        <input type="file"
          accept=".png, .jpg, .jpeg" name='image' id="image-upload" filename="image" onChange={onChange} hidden />
        <label htmlFor="image-upload" class="btn upload-btn">Upload Image</label>
      </div></form>
  )
}

export default Update