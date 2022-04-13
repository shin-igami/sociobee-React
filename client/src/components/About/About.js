import React from 'react'
import aboutImage from '../../assets/images/about.jpg'
import './About.css'
const About = () => {
  return (
    <section className="about" id="about">
  <div className="content">
    <div className="title"><span>About SocioBee</span></div>
  <div className="about-details">
    <div className="left">
      <img src={aboutImage} alt=""/>
    </div>
    <div className="right">
      <div className="topic">Our Bees love to express!</div>
      <p>Individual expression has evolved into a new and useful form in this social world. Lately, blogs have become an important form of emotional and informational release for a growing proportion of the population. It is a new and intriguing form of communication and personal expression. Through our website - SocioBee we aim to explain the need and the important role they play in society, help people to bring themselves out of their beehive and to provide a platform to express themselves. 
        </p>
        <p> SocioBee will enable, in their writers, a freedom of expression which may not be as readily available in other media. SocioBee will cover a wide range of subject areas, like technology, health, opportunities, political, creative writing, travel, food, fashion, entertainment and so on focusing on versatility and freedom of expression. In fact, any subject which generates interest among a reasonably sized group of people has the potential to become a blog. We shall help people, who are looking for introspection and social contact, by providing them a platform and help them to share their emotions freely.       
      </p>
    </div>
  </div>
  </div>
</section>
  )
}

export default About