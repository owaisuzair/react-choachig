import React from 'react'

function contact() {
  return (
    <>
       {/* <!-- Start Quick Contact 
    ============================================= --> */}
    <div class="quick-contact-area bg-gradient text-light default-padding">
        {/* <!-- Shape --> */}
        <div class="shape-left-top" style={{backgroundImage: 'url(assets/img/shape/25.png)'}}></div>
        {/* <!-- Shape --> */}
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="quick-contact-style-one">
                        <h4 class="sub-heading light">Need a project?</h4>
                        <h2 class="heading">To make requests for further information, contact us via our social channels.</h2>
                        <ul>
                            <li>We just need a couple of hours!</li>
                            <li>No more than 2 working days since receiving your issue ticket.</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 offset-xl-1">
                    <form action="https://validthemes.live/themeforest/crysa/assets/mail/contact.php" method="POST" class="contact-form consultation-form theme">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="name">You Name</label>
                                    <input class="form-control" id="name" name="name" placeholder="Jonathom Doe" type="text"/>
                                    <span class="alert-error"></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input class="form-control" id="email" name="email" placeholder="Email" type="email"/>
                                    <span class="alert-error"></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input class="form-control" id="phone" name="phone" placeholder="+92198130294" type="text"/>
                                    <span class="alert-error"></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <select id="subject">
                                        <option value="1">Chose Subject</option>
                                        <option value="2">it Solutions Support</option>
                                        <option value="4">Accounting Technologies</option>
                                        <option value="5">Support Items</option>
                                        <option value="6">Machine Language</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <button type="submit" name="submit" id="submit">
                                    Get Free Consultation <i class="fas fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Alert Message --> */}
                        <div class="col-lg-12 alert-notification">
                            <div id="message" class="alert-msg"></div>
                        </div>
                    </form>
                    <ul class="contact-list">
                        <li>
                            <div class="icon">
                                <i class="fal fa-user-headset"></i>
                            </div>
                            <div class="info">
                                <h5>Call for Emergency Assistance</h5>
                                <a href="tel:+9198130294">+92198130294</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Quick Contact --> */}
    </>
  )
}

export default contact
