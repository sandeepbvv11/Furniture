import React from 'react'
import './Hero.css';
const Hero = () => {
    return (
        <header id="home" className="welcome-hero">

            <div id="header-carousel" className="carousel">
                <div className="single-welcome-hero">

                  <img className="welcome-hero-img" src="assets/images/hero/hero-image.png" alt="hero" />
                    <div className="welcome-hero-txt">
                        <h4>New Arrival</h4>
                        <h2>Discover Our</h2>
                        <h2>New Collection</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>

                        <button className="btn-cart welcome-add-cart"
                            onClick="window.location.href='#'">
                            Buy now
                        </button>

                    </div>
                    {/* <!--/.welcome-hero-txt--> */}

                    {/* <!--/.single-welcome-hero--> */}



                    {/* <!--/.row--> */}

                    {/* <!--/.welcome-hero-content--> */}









                </div>
            </div>
            {/* <!--/#header-carousel--> */}

            {/* <!-- top-area Start --> */}
            <div className="top-area">
                <div className="header-area">
                    {/* <!-- Start Navigation --> */}
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
                        data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">




                        <div className="container">



                            {/* <!-- Start Header Navigation --> */}
                            <div className="navbar-header">
                                <a className="navbar-brand" href="index.html">Furniture</a>

                            </div>


                            {/* <!-- End Header Navigation --> */}



                        </div>
                        {/* <!--/.container--> */}
                    </nav>
                    {/* <!--/nav-->
                    <!-- End Navigation --> */}
                </div>
                {/* <!--/.header-area--> */}


            </div>
            {/* <!-- top-area End --> */}

        </header>
    )
}

export default Hero