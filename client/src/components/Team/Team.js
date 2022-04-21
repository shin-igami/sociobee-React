import React from 'react'
import './Team.css'
import imageSakshi from '../../assets/images/sakshi.jpeg'
import imageShreya from '../../assets/images/shreya.jpeg'
import imageShahina from '../../assets/images/shahina.jpeg'
import imageSurbhi from '../../assets/images/surbhi.jpeg'
const Team = () => {
    return (
        <section className="our-team" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mt-5 text-center">Team SocioBee</h2>
                        <p>Meet our team which works harder for your beehive!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <img src={imageSakshi} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-detail">
                                    <h4>Sakshi Saxena</h4>
                                    <span>1913270</span>
                                </div>
                                <div className="social">
                                    <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <img src={imageShahina} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-detail">
                                    <h4>Shahina Ali Saifi</h4>
                                    <span>1913275</span>
                                </div>
                                <div className="social">
                                <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <img src={imageShreya} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-detail">
                                    <h4>Shreya Singh</h4>
                                    <span>1913286</span>
                                </div>
                                <div className="social">
                                <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member">
                            <img src={imageSurbhi} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-detail">
                                    <h4>Surbhi Gupta</h4>
                                    <span>1913305</span>
                                </div>
                                <div className="social">
                                <a href="https://twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team