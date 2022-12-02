import React from 'react'

function process() {
  return (
    <>
       {/* <!-- Start Process
    ============================================= --> */}
    <div class="process-area bg-dark text-center text-light default-padding bottom-less">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="site-heading text-center">
                        <h4 class="sub-title">How it works</h4>
                        <h2 class="title">How do we manage <br/> IT services for your industry</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                
                {/* <!-- Single Item --> */}
                <div class="col-lg-4 process-style-two">
                    <div class="item">
                        <img src={("assets/img/icon/3.png")} alt="Icon"/>
                        <h4>Send us Message</h4>
                        <p>
                            Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always point.
                        </p>
                        <a href="#"><i class="fas fa-angle-right"></i></a>
                    </div>
                </div>               
                {/* <!-- Single Item -->  */}

                {/* <!-- Single Item --> */}
                <div class="col-lg-4 process-style-two">
                    <div class="item">
                        <img src={("assets/img/icon/4.png")} alt="Icon"/>
                        <h4>Discuss With Us</h4>
                        <p>
                            Greather do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always point.
                        </p>
                        <a href="#"><i class="fas fa-angle-right"></i></a>
                    </div>
                </div>               
                {/* <!-- Single Item -->  */}

                {/* <!-- Single Item --> */}
                <div class="col-lg-4 process-style-two">
                    <div class="item">
                        <img src={("assets/img/icon/5.png")} alt="Icon"/>
                        <h4>Make a Payment!</h4>
                        <p>
                            Perfection do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always.
                        </p>
                        <a href="#"><i class="fas fa-angle-right"></i></a>
                    </div>
                </div>               
                {/* <!-- Single Item -->  */}


            </div>
        </div>
    </div>
    {/* <!-- End Process --> */}
    </>
  )
}

export default process
