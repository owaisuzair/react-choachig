import React from 'react'
import{ImageIcone_1,ImageIcone_2,ImageIcone_3} from './image'
function process() {
  return (
    <>
       {/* <!-- Start Process
    ============================================= --> */}
    <div className="process-area bg-dark text-center text-light default-padding bottom-less">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">How it works</h4>
                        <h2 className="title">How do we manage <br/> IT services for your industry</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                
                {/* <!-- Single Item --> */}
                <div className="col-lg-4 process-style-two">
                    <div className="item">
                        <img src={ImageIcone_1} alt="Icon"/>
                        <h4>Send us Message</h4>
                        <p>
                            Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always point.
                        </p>
                        <a href="#"><i className="fas fa-angle-right"></i></a>
                    </div>
                </div>               
                {/* <!-- Single Item -->  */}

                {/* <!-- Single Item --> */}
                <div className="col-lg-4 process-style-two">
                    <div className="item">
                        <img src={ImageIcone_2} alt="Icon"/>
                        <h4>Discuss With Us</h4>
                        <p>
                            Greather do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always point.
                        </p>
                        <a href="#"><i className="fas fa-angle-right"></i></a>
                    </div>
                </div>               
                {/* <!-- Single Item -->  */}

                {/* <!-- Single Item --> */}
                <div className="col-lg-4 process-style-two">
                    <div className="item">
                        <img src={ImageIcone_3} alt="Icon"/>
                        <h4>Make a Payment!</h4>
                        <p>
                            Perfection do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold always.
                        </p>
                        <a href="#"><i className="fas fa-angle-right"></i></a>
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
