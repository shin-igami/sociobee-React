import React from 'react'
import './editor.css'
import uploadPng from '../../assets/images/upload.png'
import { useContext, useState } from 'react'
import blogContext from '../../context/blogContext'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom'

const Editor = () => {
  const context = useContext(blogContext)
  const { addABlog } = context
  const [blog, setBlog] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate();
  const [{ alt, src }, setImg] = useState({
    // src: "",
    // alt: 'Upload an Image'
  });
  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)
    formData.append("description", description)

    addABlog(formData)
    navigate("/yourblogs")
  }
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
        <img src={src} alt={alt} />
      </div>

      <div class="blog">
        <textarea type="text" class="title" placeholder="Enter your Blog title here.." name='title' value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
        <textarea type="text" class="article" placeholder="Start writing here..." name='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div class="blog-options">
        <button class="btn dark publish-btn" id='publish-btn' onClick={handleClick}>publish</button>
        <input type="file"
          accept=".png, .jpg, .jpeg" name='image' id="image-upload" filename="image" onChange={onChange} hidden required/>
        <label htmlFor="image-upload" class="btn upload-btn" id='upload-btn'>Upload Image</label>
      </div></form>
  )
}

export default Editor