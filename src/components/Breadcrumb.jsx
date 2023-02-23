import React from 'react'
import {Image_portfolio_2,} from './image'
function Breadcrumb() {
  return (
    <>
       {/* <!-- Start Breadcrumb 
    ============================================= --> */}
    <div className="breadcrumb-area text-center shadow dark text-light bg-cover" style={{backgroundImage: `url(${Image_portfolio_2})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="./index.html"><i className="fas fa-home"></i> Home</a></li>
                            <li className="active">About</li>
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

export default Breadcrumb
