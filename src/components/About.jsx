import React from 'react'
import { BackgroundImage_5 } from './image'

function About() {
  return (
    <>
         {/* <!-- Start About
    ============================================= --> */}
    <div className="about-style-four-area default-padding-bottom">
        <div className="container">
            <div className="row align-center">
                <div className="about-style-four col-lg-5">
                    <div className="thumb">
                        <img src={BackgroundImage_5} alt="Thumb"/>
                        <div className="shape-move"></div>
                        <div className="shape-move"></div>
                    </div>
                </div>
                <div className="about-style-four col-lg-6 offset-lg-1">
                    <h4 className="sub-heading mb-20">Who we are</h4>
                    <h2 className="heading">Preparing for your success <br/> trusted source in IT services</h2>
                    <p className="mb-0">
                        Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose.
                    </p>
                    <ul>
                        <li>
                            We’ve created a paradigm to enhance this healing potential by taking all aspects.
                        </li>
                        <li>
                            Our courses are made with experts, pack a ton of value and are binge-able.
                        </li>
                        <li>
                            This approach to health care addresses the root causes of disease and views the body as one integrated system.
                        </li>
                    </ul>
                    <a className="btn mt-30 btn-md btn-theme" href="./about us.html">Know More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End About --> */}
    </>
  )
}

export default About
