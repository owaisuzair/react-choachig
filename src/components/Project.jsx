import React from 'react'
import {Image_portfolio_1,Image_portfolio_2,Image_portfolio_3,Image_portfolio_4,Image_portfolio_5,Image_portfolio_6,} from './image'
function Project() {
  return (
    <>
      {/* <!-- Start Projects 
    ============================================= --> */}
    <div className="projects-area bg-gray default-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Case Studies</h4>
                        <h2 className="title">Latest showcase and <br/
                        > solutions to our customers!</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="masonary">
                        <div id="gallery-masonary" className="gallery-items text-center colums-3">
                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_1} alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html">Web designing</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_2} alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html">frontend development</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_3} alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html">backend development</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_4} alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html">introduction to webdevelopment </a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Item --> */}

                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_5} alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html"> Freelancing</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div className="gallery-item gallery-style-one">
                                <div className="item gallery-mixed-item">
                                    <div className="thumb">
                                        <img src={Image_portfolio_6}alt="Thumb"/>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h4><a href="project-details.html">English Language </a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Item --> */}
    
    
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    {/* <!-- End Projects --> */}
    </>
  )
}

export default Project
