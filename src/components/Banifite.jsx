import React from 'react'
import { BackgroundImage_banner_4,BackgroundImage_banner_5} from './image'
function Banifite() {
  return (
    <>
       {/* <!-- Start Our Benifits
    ============================================= --> */}
    <div class="benifits-area bg-cover shadow light default-padding-top" style={{backgroundImage:`url(${ BackgroundImage_banner_4})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h4 className="bg-text" style={{backgroundImage: `url(${BackgroundImage_banner_5})`}}>Technology</h4>
                </div>
                <div className="col-lg-7 offset-lg-5 benifits-style-one">
                    <div className="item">
                        <h2 className="heading">We’re using latest <br/> technology in projects </h2>
                        <p className="mb--5">
                            Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                        </p>
                        <a className="btn mt-30 btn-md btn-gradient" href="contact-us.html">Start a project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Our Benifits --> */}
    </>
  )
}

export default Banifite
