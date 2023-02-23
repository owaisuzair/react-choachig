import React from 'react'
import {Image_form} from './image'
function Contact_from() {
  return (
    <>
      {/* 
    <!-- Start Contact Form 
    ============================================= --> */}
    <div id="contact" class="contact-form-area contact-style-two-area default-padding bg-gray overflow-hidden" style={{backgroundImage: `url(${Image_form})`}}>
        <div class="container">
            {/* <!-- Contact Form --> */}
            <div class="row">
                
                <div class="col-lg-7">
                    <div class="form">
                        <form action="https://validthemes.live/themeforest/crysa/assets/mail/contact.php" method="POST" class="contact-form contact-form">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group comments">
                                        <textarea class="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <button type="submit" name="submit" id="submit">
                                        <i class="fa fa-paper-plane"></i> Get in Touch
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Alert Message --> */}
                            <div class="col-lg-12 alert-notification">
                                <div id="message" class="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="thumb">
                        <div class="contact-info">
                            <h2 class="heading">Have Questions? <br/> Get in Touch!</h2>
                            {/* <!-- Single Item --> */}
                            <div class="item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="info">
                                    <h5>Location</h5>
                                    <p>
                                        
                                        near baitul muazzam masjid <br/>iqbal market  sector 11 1/2 karachi
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div class="item">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="info">
                                    <h5>Make a Call</h5>
                                    <p>
                                        + 03198130294 <br/> + 03198130294
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <!-- End Contact Form --> */}


        </div>
    </div>
    {/* <!-- End Contact Form --> */}
    </>
  )
}

export default Contact_from
