import React from 'react'
import {Team} from './image'
function service() {
  return (
    <>
        {/* <!-- Start Services 
    ============================================= --> */}
    <div class="services-area default-padding bottom-less">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="site-heading text-center">
                        <h4 class="sub-title">Meet our services</h4>
                        <h2 class="title">We offer you all services <br/> about professional IT Services</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="services-style-one-box">
                <div class="row">
                    {/* <!-- Sngle Item --> */}
                    <div class="services-style-four col-xl-3 col-md-6">
                        <div class="item style-four-item">
                            <div class="bg-shape" style={{backgroundImage: 'url(assets/img/shape/28.png)'}}></div>
                            <div class="thumb" style={{backgroundImage: 'url(assets/img/services/4.jpg)'}}></div>
                            <i class="flaticon-data-processing"></i>
                            <h4><a href="#">Data Center</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div class="bottom">
                                <span>01</span>
                                <a href="#"><i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item -->
                    <!-- Sngle Item --> */}
                    <div class="services-style-four col-xl-3 col-md-6">
                        <div class="item style-four-item active">
                            <div class="bg-shape" style={{backgroundImage: 'url(assets/img/shape/28.png)'}}></div>
                            <div class="thumb" style={{backgroundImage:'url(assets/img/about/9.jpg)'}}></div>
                            <i class="flaticon-data-security"></i>
                            <h4><a href="#">Cloud Services</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div class="bottom">
                                <span>02</span>
                                <a href="#"><i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item -->
                    <!-- Sngle Item --> */}
                    <div class="services-style-four col-xl-3 col-md-6">
                        <div class="item style-four-item">
                             <div class="bg-shape" style={{backgroundImage: 'url(./assets/img/shape/28.png)'}}></div>
                              <div class="thumb" style={{backgroundImage: 'url(./assets/img/service/3.jpg)'}}></div>
                            <i class="flaticon-augmented-reality"></i>
                            <h4><a href="#">Software Development</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div class="bottom">
                                <span>03</span>
                                <a href="#"><i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Sngle Item --> */}
                    {/* <!-- Sngle Item --> */}
                    <div class="services-style-four col-xl-3 col-md-6">
                        <div class="item style-four-item">
                            <div class="bg-shape" style={{backgroundImage: 'url(./assets/img/shape/28.png)'}}></div>
                            <div class="thumb" style={{backgroundImage: 'url(./assets/img/about/4.jpg)'}}></div>
                            <i class="flaticon-stock-market"></i>
                            <h4><a href="#">IT Management</a></h4>
                            <p>
                                Indeed vanity excuse or lovers of on. By offer scale an energy. Blush be sorry no sight sang lose.
                            </p>
                            <div class="bottom">
                                <span>04</span>
                                <a href="#"><i class="fas fa-arrow-right"></i></a>
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
