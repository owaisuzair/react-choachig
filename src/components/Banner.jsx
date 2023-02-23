import React from 'react'
import { BackgroundImage, BackgroundImage_1, } from './image'

function Banner() {
  return (
    <>
     {/* <!-- Start Banner Area 
    ============================================= --> */}
    <div className="banner-style-four-area bg-cover text-light" style={{backgroundImage: `url(${BackgroundImage})`}}>
        <div className="container">
            <div className="banner-items">
                <div className="row align-center">
                    <div className="col-lg-6 banner-style-four">
                        <div className="info">
                            <h4 className="sub-title">Best it solution</h4>
                            <h2 className="title">Creating a better <strong>Technology solutions</strong></h2>
                            <p>
                                Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
                            </p>
                            <div className="button">
                                <a className="btn btn-gradient btn-md radius animation" href="=tel:923198130294">Meet with us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-style-four">
                        <div className="thumb">
                            <img src={BackgroundImage_1} alt="Thumb"/>
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
