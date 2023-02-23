import React from 'react'
import {BackgroundImage_banner_6} from './image'
function Contact_breadcrumb() {
  return (
    <>
      
     {/* <!-- Start Breadcrumb 
    ============================================= --> */}
    <div class="breadcrumb-area text-center shadow dark text-light bg-cover" style={{backgroundImage: `url(${BackgroundImage_banner_6})`}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <h1>Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li><a href="./index.html"><i class="fas fa-home"></i> Home</a></li>
                            <li class="active">contact us</li>
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

export default Contact_breadcrumb
