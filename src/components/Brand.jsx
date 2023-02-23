import React from 'react'
import Slider from "react-slick"
import { LogoHhml,LogoCss,LogoBootstrap, LogoJavascript,LogoReact,LogoExpress,
    LogoFirebase, LogoMongodp,LogoNode,LogoPostgre,LogoSql,LogoTypescript,
    LogoVercle,LogoGitup ,LogoGit} from './image'
function Brand() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
 
  return (
    <>
       {/* <!-- Start Brand 
    ============================================= --> */}
    <div className="brand-area">
        <div className="container">
            <div className="brand-items pt-80 pb-80">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <div className="brand-carousel swiper"> */}
                            {/* <!-- Additional required wrapper --> */}

                            {/* <div className="swiper-wrapper"> */}
                                {/* <!-- Single Item --> */}
                                <Slider {...settings}>
                                <div className="swiper-slide">
                                    <img src={LogoHhml} alt="Thumb"/>
                                    <h4>HTML</h4>
                                </div>
                                {/* <!-- End Single Item --> */}
                                {/* <!-- Single Item --> */}
                                <div className="swiper-slide">
                                    <img src={LogoCss} alt="Thumb"/>
                                    <h4>CSS</h4>
                                </div>
                                {/* <!-- End Single Item --> */}
                                {/* <!-- Single Item --> */}
                                <div className="swiper-slide">
                                    <img src={LogoJavascript } alt="Thumb"/>
                                    <h4>JAVASCRIPT</h4>
                                </div>
                                {/* <!-- End Single Item --> */}
                                {/* <!-- Single Item --> */}
                                <div className="swiper-slide">
                                    <img src={LogoReact } alt="Thumb"/>
                                    <h4>REACT JS</h4>
                                </div>
                                {/* <!-- End Single Item --> */}
                                {/* <!-- Single Item --> */}
                                <div className="swiper-slide">
                                    <img src={LogoTypescript} alt="Thumb"/>
                                    <h4>TYPESCRIPT</h4>
                                </div>
                                {/* <!-- End Single Item --> */}
                                       {/* <!-- Single Item --> */}
                                       <div className="swiper-slide">
                                        <img src={LogoBootstrap} alt="Thumb"/>
                                        <h4>BOOTSTRAP</h4>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                     {/* <!-- Single Item --> */}
                                     <div className="swiper-slide">
                                        <img src={LogoExpress} alt="Thumb"/>
                                        <h4>EXPRESS JS</h4>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                      {/* <!-- Single Item --> */}
                                      <div className="swiper-slide">
                                        <img src={LogoFirebase} alt="Thumb"/>
                                        <h4>FIREBASE</h4>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                     {/* <!-- Single Item --> */}
                                     <div className="swiper-slide">
                                        <img src={LogoMongodp} alt="Thumb"/>
                                        <h4>MONGO </h4>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="swiper-slide">
                                        <img src={LogoNode} alt="Thumb"/>
                                        <h4>NODE JS</h4>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                     {/* <!-- Single Item --> */}
                                    <div className="swiper-slide">
                                        <img src={ LogoPostgre} alt="Thumb"/>
                                        <h4> POSTGRE SQL</h4>
                                    </div>
                                    
                                        {/* <!-- End Single Item --> */}
                                         {/* <!-- Single Item --> */}
                                        <div className="swiper-slide">
                                            <img src={LogoSql} alt="Thumb"/>
                                            <h4>SQL</h4>
                                        </div>
                                        {/* <!-- End Single Item --> */}
                                           {/* <!-- Single Item --> */}
                                        <div className="swiper-slide">
                                            <img src={LogoVercle} alt="Thumb"/>
                                            <h4>VERCLE</h4>
                                        </div>
                                        {/* <!-- End Single Item --> */}
                                            {/* <!-- Single Item --> */}
                                            <div className="swiper-slide">
                                                <img src={LogoGit} alt="Thumb"/>
                                                <h4>GIT</h4>
                                            </div>
                                            {/* <!-- End Single Item --> */}
                                             {/* <!-- Single Item --> */}
                                             <div className="swiper-slide">
                                                <img src={LogoGitup} alt="Thumb"/>
                                                <h4>GIT UP</h4>
                                            </div>
                                            </Slider>
                                            {/* <!-- End Single Item --> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Brand --> */}
    </>
  )
}

export default Brand
