import React from 'react'
import {BackgroundImage_banner_2} from './image'
function Courses_breadcrumb() {
  return (
    <>
        {/* <!-- Start Breadcrumb 
    ============================================= --> */}
    <div className="breadcrumb-area text-center shadow dark text-light bg-cover" style={{backgroundImage: `url(${BackgroundImage_banner_2})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1>Latest Projects</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                            <li className="active">Projects</li>
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

export default Courses_breadcrumb
