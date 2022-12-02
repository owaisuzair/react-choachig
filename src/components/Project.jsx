import React from 'react'

function Project() {
  return (
    <>
      {/* <!-- Start Projects 
    ============================================= --> */}
    <div class="projects-area bg-gray default-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="site-heading text-center">
                        <h4 class="sub-title">Case Studies</h4>
                        <h2 class="title">Latest showcase and <br/> solutions to our customers!</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="masonary">
                        <div id="gallery-masonary" class="gallery-items text-center colums-3">
                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/22.jpg")} alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html">Web designing</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/8.jpg")} alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html">frontend development</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/33.jpg")} alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html">backend development</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/44.jpg")} alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html">introduction to webdevelopment </a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Item --> */}

                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/4.jpg")} alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html"> Freelancing</a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
    
                            {/* <!-- Single Item --> */}
                            <div class="gallery-item gallery-style-one">
                                <div class="item gallery-mixed-item">
                                    <div class="thumb">
                                        <img src={("assets/img/portfolio/5.jpg")}alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <h4><a href="project-details.html">English Language </a></h4>
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Item --> */}
    
    
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    {/* <!-- End Projects --> */}
    </>
  )
}

export default Project
