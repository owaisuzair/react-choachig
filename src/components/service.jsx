import React from 'react'
import { BackgroundImage_1, BackgroundImage_3,BackgroundImage_7 ,BackgroundImage_8,backgroundShape_1 } from './image'
function service() {
  return (
    <>
        {/* <!-- Start Services 
    ============================================= --> */}
    <div className="services-area default-padding bottom-less">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Meet our services</h4>
                        <h2 className="title">We offer you all services <br/> about professional IT Services</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="services-style-one-box">
                <div className="row">
                    {/* <!-- Sngle Item --> */}
                    <div className="services-style-four col-xl-3 col-md-6">
                        <div className="item style-four-item">
                            <div className="bg-shape"style={{backgroundImage: `url(${backgroundShape_1})`}}></div>
                            <div className="thumb" style={{backgroundImage: `url(${BackgroundImage_3})`}}></div>
                            <i className="flaticon-data-processing"></i>
                            <h4><a href="#">Data Center</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div className="bottom">
                                <span>01</span>
                                <a href="#"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item -->
                    <!-- Sngle Item --> */}
                    <div className="services-style-four col-xl-3 col-md-6">
                        <div className="item style-four-item active">
                            <div className="bg-shape" style={{backgroundImage: `url(${backgroundShape_1})`}}></div>
                            <div className="thumb" style={{backgroundImage:`url(${BackgroundImage_1})`}}></div>
                            <i className="flaticon-data-security"></i>
                            <h4><a href="#">Cloud Services</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div className="bottom">
                                <span>02</span>
                                <a href="#"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item -->
                    <!-- Sngle Item --> */}
                    <div className="services-style-four col-xl-3 col-md-6">
                        <div className="item style-four-item">
                             <div className="bg-shape" style={{backgroundImage: `url(${backgroundShape_1})`}}></div>
                              <div className="thumb" style={{backgroundImage: `url(${BackgroundImage_7})`}}></div>
                            <i className="flaticon-augmented-reality"></i>
                            <h4><a href="#">Software Development</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div className="bottom">
                                <span>03</span>
                                <a href="#"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item --> */}
                    {/* <!-- Sngle Item --> */}
                    <div className="services-style-four col-xl-3 col-md-6">
                        <div className="item style-four-item">
                            <div className="bg-shape" style={{backgroundImage: `url(${backgroundShape_1})`}}></div>
                            <div className="thumb" style={{backgroundImage: `url(${BackgroundImage_8})`}}></div>
                            <i className="flaticon-stock-market"></i>
                            <h4><a href="#">IT Management</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div className="bottom">
                                <span>04</span>
                                <a href="#"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Services --> */}
    </>
  )
}

export default service
