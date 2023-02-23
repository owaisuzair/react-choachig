import React from 'react'
import {backgroundShape_1,About_image_1,Image_circle,Image_600} from './image'
function About_service_it() {
  return (
    <>
      
      {/* <!-- Start About Area
    ============================================= --> */}
    <div className="about-area default-padding-top relative">
        {/* <!-- Shape --> */}
        <div className="shape-right-bottom"/>
            <img src={backgroundShape_1} alt="Shape"/>
        </div>
        {/* <!-- End Shape --> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-style-two">
                        <div className="thumb">
                            <img src={About_image_1} alt="Thumb"/>
                            <div className="shape">
                                <img src={Image_circle} alt="Shape"/>
                            </div>
                            <div className="fun-fact">
                                <div class="counter">
                                    <div className="timer" data-to="846" data-speed="5000">846</div>
                                    <div className="operator">K</div>
                                </div>
                                <span className="medium">Worldwide Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-style-two">
                        <div className="content">
                            <h2 className="heading">Preparing for your success <br/> trusted source in IT services</h2>
                            <p>
                                We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.
                            </p>
                            <ul>
                                <li>IT Consultancy</li>
                                <li>Technical Support</li>
                                <li>Atlantic silverside parrotfish barbeled</li>
                                <li>Baikal oilfish flagfin sturgeon Atlantic</li>
                            </ul>
                        </div>
                        <div className="expertise text-light" style={{backgroundImage: `url(${Image_600})`}}>
                            <div className="left">
                                <h2><strong>28</strong> Years of experience</h2>
                            </div>
                            <div class="right">
                                <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" className="popup-youtube video-play-button with-text">
                                    <div className="effect"></div>
                                    <span><i className="fas fa-play"></i> WATCH PROCESS</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- End About Area --> */}
    </>
  )
}

export default About_service_it
