import React from 'react'
import {About_image,Image_arrow} from './image'
function About_process() {
  return (
    <>
      
    {/* <!-- Start Process
    ============================================= --> */}
    <div className="process-area bg-dark text-light default-padding">
        <div className="container">
            <div class="row align-center">
                <div className="col-xl-6 col-lg-5">
                    <div className="process-style-one">
                        <div className="thumb">
                            <img src={About_image} alt="Thumb"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                    <div className="processs-style-one">
                        <h4 className="sub-heading">Our Solutions</h4>
                        <h2 className="heading">How do we manage <br/> IT services for your industry</h2>
                        <ul className="process-list">
                            <li>
                                <img src={Image_arrow} alt="Arrrow"/>
                                <h4>Receive Custom Plan</h4>
                                <p>
                                    Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better performing renovation.
                                </p>
                            </li>
                            <li>
                                <img src={Image_arrow} alt="Arrrow"/>
                                <h4>Deliver expected project</h4>
                                <p>
                                    Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better exicution.
                                </p>
                            </li>
                        </ul>
                        <div className="single-kit mt-30">
                            <div className="call">
                                <div className="icon">
                                    <i className="fas fa-comments-alt-dollar"></i>
                                </div>
                                <div className="info">
                                    <p>Have any Questions?</p>
                                    <h5><a href="mailto:info.alphageno@gmail.com">info.alphageno@gmail.com</a></h5>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" class="popup-youtube video-play-button with-text">
                                <div class="effect"></div>
                                <span><i className="fas fa-play"></i> WATCH PROCESS</span>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    {/* <!-- End Process --> */}
    </>
  )
}

export default About_process
