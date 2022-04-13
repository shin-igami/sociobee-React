import React from 'react'
import './Footer.css'
const Footers = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>SocioBee</h3>
                            <p>We at SocioBee believe in thoughts and emotions and want people to express themselves.</p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#blogs-section">Blogs</a></li>
                                <li><a href="#team">Our Team</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                Group 13 <br />
                                B.Tech III Year<br />
                                Electronics & Communication<br />
                                <strong>Phone:</strong> +91 123456789<br />
                                <strong>Email:</strong>sociobee.com<br />
                            </p>

                            <div className="social-links">
                                <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Leverage our services and if you have something, please free to mail us. We will get back to you shortly.</p>
                            <form className="subscriber" action="">
                                <input id="subEmail" type="email" name="email" />
                                <div id="subButton" onclick="subscribe()">Subscribe</div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>SocioBee</strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#home">SocioBee</a>
                </div>
            </div>
        </footer>
    )
}

export default Footers