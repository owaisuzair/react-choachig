import React from 'react'
import {BackgroundImage_banner} from './image'
function Achiviment() {
  return (
    <>
      {/* <!-- Start Achivement 
    ============================================= --> */}
    <div class="achivement-area default-padding">
        <div class="container">
            <div class="row">
                {/* <!-- Single Item --> */}
                <div class="achivement-style-one text-light col-lg-6">
                    <div class="item" style={{backgroundImage: `url(${BackgroundImage_banner})`}}>
                        <div class="progressbar">
                            <div class="circle" data-percent="83">
                                <strong></strong>
                            </div>
                        </div>
                        <div class="content">
                            <h4>Customer satisfaction</h4>
                            <p>
                                Pointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose ecstatic and properly.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}
                <div class="achivement-style-one col-lg-6">
                    <div class="item bg-gradient text-light">
                        <div class="content">
                            <div class="achivement">
                                <div class="fun-fact">
                                    <div class="counter">
                                        <div class="timer" data-to="45" data-speed="1000">45</div>
                                        <div class="operator">k</div>
                                    </div>
                                    <h4>Customers worldwide</h4>
                                </div>
                            </div>
                            <p>
                                Mentioning horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no  properly.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}
            </div>
        </div>
    </div>
    {/* <!-- End Achivement --> */}
    </>
  )
}

export default Achiviment
