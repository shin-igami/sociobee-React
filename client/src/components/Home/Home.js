import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <section className="home" id="home">
  <div className="home-content">
    <div className="text">
      <div className="text-one">Hello,</div>
      <div className="text-two">I'm SocioBee</div>
      <div className="text-four">A blog writing website for people to express themselves freely.</div>
    </div>
    <div className="button">
      {!token?<Link className='login-button' to="/login">Join our BeeHive!</Link>:
      <Link className='login-button' to="/">Welcome to our BeeHive!</Link>}
    </div>
  </div>
</section>
  )
}

export default Home