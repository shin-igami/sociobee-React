import React,{useEffect} from 'react'
import './SpecificBlog.css'
import uploadPng from '../../assets/images/upload.png'
import { useContext, useState } from 'react'
import blogContext from '../../context/blogContext'
import { useNavigate } from 'react-router-dom'

const SpecificBlog = () => {
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

  return (
    <form >
       <div class="banner">
       <img src={`/uploads/${image}`} alt="" />
    </div>
    <p class="card-text"><small class="text-muted">by {previousData.userName?previousData.userName:"Unknown"} on {new Date(previousData.date).toDateString()}</small></p>
      <div class="blog">
        <h2 type="text" class="title" name='title' >{title}</h2>
        <p type="text" class="article" name='description' >{description}</p>
      </div>

     </form>
  )
}

export default SpecificBlog