import React ,{useState,useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const history = useNavigate()
  const token = localStorage.getItem("token")
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    history("/login")
  }
  const [val,setVal] = useState("")
  useEffect(() => {
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        setVal("sticky")
      }else{
        setVal("")
      }
    
    }
  }, [val])
  return (
    <nav className={val}>
    <div className="navbar">
      <div className="logo"><a href="/#home">SocioBee</a></div>
      {!token?<ul className="menu">
      <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#blogs-section">Blogs</a></li>             
          <li><a href="/#team">Our Team</a></li>
          <li><a href="/#footer">Contact</a></li>
      </ul>:
      <ul className="menu">
        <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#blogs-section">Blogs</a></li>             
          <li><a href="/#team">Our Team</a></li>
          <li><a href="/#footer">Contact</a></li>
          <li><a href="editor/#editor">Editor</a></li>
          <li><Link to="yourblogs">Your Blogs</Link></li>
      </ul>}
      <div className="media-icons">
        <ul className="menu">
         {token &&
          <li> <button className="btn btn-out" onClick={handleLogout} role="button">LogOut</button></li>}
      </ul>
      </div>
    </div>
    <div className="menu-btn">
      <i className="fas fa-bars"></i>
    </div>
  </nav>
  )
}

export default Navbar