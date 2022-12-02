import React from 'react'
import {LogoWhite} from './image'
function Footer() {
  return (
    <>
    {/* <!-- Start Footer 
    ============================================= --> */}
    <footer className="bg-dark text-light">
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item about">
                            <img className="logo" src={LogoWhite} alt="Logo"/>
                            <p>
                                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing.
                            </p>
                            <ul className="social">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                   <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                              
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Solutions</h4>
                            <ul>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> IT Management</a>
                                </li>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> Cyber Security</a>
                                </li>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> Cloud Computing</a>
                                </li>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> IT Consulting</a>
                                </li>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> Software Dev</a>
                                </li>
                                <li>
                                    <a href="services-details.html"><i className="fas fa-angle-right"></i> Backup & Recovery</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 item">
                        <div className="f-item contact-widget">
                            <h4 className="widget-title">Contact Info</h4>
                            <div className="address">
                                <ul>
                                    <li>
                                        near baitul muazzam masjid <br/>iqbal market  sector 11 1/2 karachi
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div className="content">
                                            <strong>Opening Hours:</strong>
                                            6:00 AM – 11:00 PM
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fal fa-user-headset"></i>
                                        </div>
                                        <div className="content">
                                            <strong>Phone:</strong>
                                            <a href="tel:9198130294">+92198130294</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 item">
                        <div className="f-item newsletter">
                            <h4 className="widget-title">Subscribe to Newsletter</h4>
                            <p>
                                Join our subscribers list to get the latest news and special offers. 
                            </p>
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email"/>
                                <button type="submit"> Subscribe Now <i className="fa fa-paper-plane"></i></button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Footer Bottom --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom-box">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>&copy; Copyright 2022. All Rights Reserved by <a href="#"> alphageno</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Footer Bottom --> */}
    </footer>
    {/* <!-- End Footer --> */}
    </>
  )
}

export default Footer