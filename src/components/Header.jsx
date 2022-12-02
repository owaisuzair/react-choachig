import React from 'react'
import {Logo} from './image'
function Header() {
  return (
    <>
    {/* <!-- Start Header Top    ============================================= --> */}
    <div className="top-bar bg-dark text-light top-style-one">
        <div className="container">
            <div className="row align-center">
                <div className="col-xl-8 col-lg-8 info">
                    <ul>
                        <li>
                            Need Help? <a href="tel:+923198130294">Request A Callback</a>
                        </li>
                        <li>
                            <i className="fal fa-clock"></i> <span>Working Hours: 6:00 PM – 11:00 PM</span>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-4 col-lg-4 text-right item-flex">
                    
                    <div className="social">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                          
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Header Top --> */}

    {/* <!-- Header = --> */}
    <header>
        {/* <!-- Start Navigation --> */}
        <nav className="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">

            {/* <!-- Start Top Search --> */}
            <div className="top-search">
                <div className="container-xl">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
            {/* <!-- End Top Search --> */}

            <div className="container-fluid d-flex justify-content-between align-items-center">            
                

                {/* <!-- Start Header Navigation --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="index-2.html"><img src={Logo} className="logo" alt="Logo" /></a>
                </div>
                {/* <!-- End Header Navigation --> */}

                {/* <!-- Main Nav --> */}
                <div className="main-nav-content">
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="navbar-menu">

                        <img src={Logo} alt="Logo" />
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-times"></i>
                        </button>
                        
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="">
                                <a href="" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                            </li>
                            <li className="">
                                <a href="./about us.html" className="dropdown-toggle" data-toggle="dropdown" >about us</a>
                            </li>
                            <li className="">
                                <a href="./project.html" className="dropdown-toggle" data-toggle="dropdown" >courses</a>
                            </li>
                            <li className="">
                                <a href="./why-choose-us.html" className="dropdown-toggle" data-toggle="dropdown" >why choose us</a>
                            </li>
                            <li className="">
                                <a href="./contact us.html" className="dropdown-toggle" data-toggle="dropdown" >contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="attr-right">
                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav">
                            <ul>
                                <li className="contact">
                                    <div className="call">
                                        <div className="icon">
                                            <i className="fas fa-comments-alt-dollar"></i>
                                        </div>
                                        <div className="info">
                                            <p>Have any Questions?</p>
                                            <h5><a href="mailto:info.alphageno@gmail.com">info.alphageno@gmail.com</a></h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation --> */}

                        {/* <!-- Start Side Menu --> */}
                        <div className="side">
                            <a href="#" className="close-side"><i className="icon_close"></i></a>
                            <div className="widget">
                                <div className="logo">
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <p>
                                    Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                                </p>
                            </div>
                            <div className="widget address">
                                <div>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <p>Address</p> 
                                                <strong>California, TX 70240</strong>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <p>Email</p> 
                                                <strong>support@validtheme.com</strong>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <p>Contact</p> 
                                                <strong>+44-20-7328-4499</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget newsletter">
                                <h4 className="title">Get Subscribed!</h4>
                                <form action="#">
                                    <div className="input-group stylish-input-group">
                                        <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <i className="arrow_right"></i>
                                            </button>  
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="widget social">
                                <ul className="link">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        {/* <!-- End Side Menu -->  */}
                    </div>

                    {/* <!-- Overlay screen for menu --> */}
                    <div className="overlay-screen"></div>
                    {/* <!-- End Overlay screen for menu --> */}

                </div>
                {/* <!-- Main Nav --> */}

            </div>   
        </nav>
        {/* <!-- End Navigation --> */}
    </header>
    {/* <!-- End Header --> */}

    </>
  )
}

export default Header
