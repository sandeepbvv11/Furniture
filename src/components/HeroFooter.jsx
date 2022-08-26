import React from 'react'
import "./HeroFooter.css";
const HeroFooter = () => {
    return (
        <section id="hero-footer" className="hero-footer single-hero-footer">
            <div className="container ">
                <div className="hero-footer-content ">
                    <div className="row">
                        <div className="col-md-4 herofooter">
                            
                                <div className="single-hero-footer-img mt40">
                                    <img src="assets/images/herofooter/free-delivery.svg" alt="hero-footer images" />
                                </div>
                                <div className="herofooter-text">
                                <h2>Free delivery</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            
                        </div>
                        <div className="col-md-4 herofooter">
                          <div className="single-hero-footer-img mt40">
                                    <img src="assets/images/herofooter/support247.svg" alt="hero-footer images" />
                                </div>
                                <div className="herofooter-text">
                                <h2>Suport 24/7</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                </div>
                        </div>
                        <div className="col-md-4 herofooter">
                        <div className="single-hero-footer-img mt40">
                                    <img src="assets/images/herofooter/authentic.svg" alt="hero-footer images" />
                                </div>
                                <div className="herofooter-text">
                                <h2>100% Authentic</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroFooter