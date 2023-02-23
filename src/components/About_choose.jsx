import React from 'react'
import {Image_shape,Image_icone,Image_icone_4 }from './image'
function About_choose() {
  return (
    <>
       {/* <!-- Start Why Choose Us 
    ============================================= --> */}
    <div class="choose-us-area default-padding-bottom">
        {/* <!-- Shape --> */}
        <div class="shape" style={{backgroundImage: `url(${Image_shape})`}}></div>
        {/* <!-- End Shape --> */}
        <div class="container">
            <div class="row">
                <div class="choose-us-style-one col-xl-5 col-lg-5">
                    <h4 class="sub-heading">Why choose us</h4>
                    <h2 class="heading">Our goal is giving the <br/> best our customers </h2>
                    <p class="mb--5">
                        Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                    </p>
                    <a class="btn mt-30 btn-md btn-theme" href="about-us.html">Know More</a>
                </div>
                <div class="choose-us-style-one text-center col-xl-6 offset-xl-1 col-lg-7">
                    <div class="right-item">
                        <div class="row">
                            {/* <!-- Signle Item --> */}
                            <div class="choose-us-card col-md-6">
                                <div class="item">
                                    <img src={Image_icone} alt="Icon"/>
                                    <span>Database</span>
                                    <h4>Secure database</h4>
                                    <a href="services-details.html">Read More</a>
                                </div>
                            </div>
                            {/* <!-- End Signle Item --> */}
                            {/* <!-- Signle Item --> */}
                            <div class="choose-us-card col-md-6">
                                <div class="item">
                                    <img src={Image_icone_4} alt="Icon"/>
                                    <span>Performance</span>
                                    <h4>incredible Performance</h4>
                                    <a href="services-details.html">Read More</a>
                                </div>
                            </div>
                            {/* <!-- End Signle Item --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Why Choose Us --> */}
    </>
  )
}

export default About_choose
