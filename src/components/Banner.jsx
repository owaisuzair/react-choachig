import React from 'react'
// import {backgroundImage} from './image'
// import {bannerImage} from './image'
function Banner() {
  return (
    <>
     {/* <!-- Start Banner Area 
    ============================================= --> */}
    <div class="banner-style-four-area bg-cover text-light" style={{backgroundImage: 'url(assets/img/shape/1.jpg)'}}>
        <div class="container">
            <div class="banner-items">
                <div class="row align-center">
                    <div class="col-lg-6 banner-style-four">
                        <div class="info">
                            <h4 class="sub-title">Best it solution</h4>
                            <h2 class="title">Creating a better <strong>Technology solutions</strong></h2>
                            <p>
                                Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
                            </p>
                            <div class="button">
                                <a class="btn btn-gradient btn-md radius animation" href="=tel:923198130294">Meet with us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 banner-style-four">
                        <div class="thumb">
                            <img src={("assets/img/about/9.jpg")} alt="Thumb"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Banner --> */}
    </>
  )
}

export default Banner
