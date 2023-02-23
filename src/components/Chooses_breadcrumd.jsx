import React from 'react'
import{BackgroundImage_banner_2} from './image'
function Chooses_breadcrumd() {
  return (
    <>
       {/* <!-- Start Breadcrumb 
    ============================================= --> */}
    <div className="breadcrumb-area text-center shadow dark text-light bg-cover" style={{backgroundImage: `url(${BackgroundImage_banner_2})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>Why Choose Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="./why-choose-us.html"><i className="fas fa-home"></i> Home</a></li>
                            <li className="active">Choose us</li>
                        </ol>
                      </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Breadcrumb --> */}
    </>
  )
}

export default Chooses_breadcrumd
