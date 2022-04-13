import React from 'react'
// import imageOne from '../../assets/images/image-one.jpg'
// import imageTwo from '../../assets/images/image-two.jpg'
// import imageThree from '../../assets/images/image-three.jpg'
import './WhyUs.css'
const WhyUs = () => {
  return (
    <section class="why-us" id="services">
  <div class="container">
        <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="mt-5 text-center">Why Choose Us</h2>
        <p class="mb-5 text-center">We believe it's important for you to take away from us!</p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 col-lg-4">
        <div class="box">
          <span>01</span>
          <h4><a href="#"></a></h4>
          <p>SocioBee will enable, in their writers, a freedom of expression which may not be as readily available in other media.</p>
          <img src='' alt=""/>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="box">
          <span>02</span>
          <h4><a href="#"></a></h4>
          <p>Richness and depth of information available with accuracy from various generations on diverse topics.</p>
          <img src='' alt=""/>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4">
        <div class="box">
          <span>03</span>
          <h4><a href="#"></a></h4>
          <p>SocioBee will permit people of almost any skill level to create a blog and share their experiences with the world.</p>
          <img src='' alt=""/>
        </div>
      </div>     
    </div>

  </div>
</section>
  )
}

export default WhyUs