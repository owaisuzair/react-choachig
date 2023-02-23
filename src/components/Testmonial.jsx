import React from 'react'
import Slider from "react-slick"
import { BackgroundImage_6 ,Image,Image_1,Image_2} from './image'

function Testmonial() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
        {/* <!-- Start Testimonials 
    ============================================= --> */}
    <div className="testimonial-area bg-fit bg-gray default-padding" style={{backgroundImage: `url(${BackgroundImage_6})`}}>
        <div className="container">
            <div className="testimonial-style-one-box text-light">
                <div className="row align-center">

                    <div className="col-lg-12">
                        <div className="testimonial-style-one-carousel swiper">
                            {/* <!-- Additional required wrapper --> */}
                            {/* <div className="swiper-wrapper"> */}
                            <Slider {...settings}>
                                {/* <!-- Single item --> */}
                                <div className="swiper-slide">
                                    <div className="testimonial-style-one">
                                        <div className="quote-icon">
                                            <img src={Image} alt="quote"/>
                                        </div>
                                        <div className="item">
                                            <div className="provider">
                                                <div className="thumb">
                                                    <img src={Image_1} alt="Thumb"/>
                                                </div>
                                                <div className="info">
                                                    <h4>Matthew J. Wyman</h4>
                                                    <span>Senior Consultant</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Maximum consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single item --> */}
                                {/* <!-- Single item --> */}
                                <div className="swiper-slide">
                                    <div className="testimonial-style-one">
                                        <div className="quote-icon">
                                            <img src={Image} alt="quote"/>
                                        </div>
                                        <div className="item">
                                            <div className="provider">
                                                <div className="thumb">
                                                    <img src={Image_2} alt="Thumb"/>
                                                </div>
                                                <div className="info">
                                                    <h4>Anthom Bu Spar</h4>
                                                    <span>Marketing Manager</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Big consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single item --> */}
                                {/* <!-- Single item --> */}
                                <div className="swiper-slide">
                                    <div className="testimonial-style-one">
                                        <div className="quote-icon">
                                            <img src={Image} alt="quote"/>
                                        </div>
                                        <div className="item">
                                            <div className="provider">
                                                <div className="thumb">
                                                    <img src={Image_1} alt="Thumb"/>
                                                </div>
                                                <div className="info">
                                                    <h4>Metho k. Partho</h4>
                                                    <span>Senior Developer</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Golden consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single item --> */}
                                </Slider>
                            {/* </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Testimonails Area --> */}
    </div>
  )
}

export default Testmonial
