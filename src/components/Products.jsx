import React from 'react'
import { useState,useEffect } from 'react';
import "./Products.css";
const Products = () => {
    const [data,setdata]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8`);
          const newData = await response.json();
          //console.log(Object.values(newData.data.products));
          let temparray=[]
          setdata(Object.values(newData.data.products));
          data.forEach(element => {
            temparray.push(element);
            //console.log(element.fulhausProductName);  
          });
          setdata(temparray)
          
        };
        //console.log(data);
        fetchData();
        
      });
    return (
        <section id="products" className="products">
            <div className="container">
                <div className="section-header">
                  
                </div>
                {/* <!--/.sample products just to show the page layout. Should retrieve the products from the url to display--> */}
                <div className="products-content">
                    <div className="row">
                       {data.forEach(element => {
                        <p>{element.fulhausProductName}</p>
                        })}
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals1.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                    
                                </div>
                                <h4><a href="#">wooden chair</a></h4>
                                <p className="arrival-product-price">$65.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals2.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                                                        
                                </div>
                                <h4><a href="#">single armchair</a></h4>
                                <p className="arrival-product-price">$80.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals3.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                </div>
                                <h4><a href="#">wooden armchair</a></h4>
                                <p className="arrival-product-price">$40.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals4.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                                                        
                                </div>
                                <h4><a href="#">stylish chair</a></h4>
                                <p className="arrival-product-price">$100.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals5.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                </div>
                                <h4><a href="#">modern chair</a></h4>
                                <p className="arrival-product-price">$120.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals6.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                    
                                </div>
                                <h4><a href="#">mapple wood dinning table</a></h4>
                                <p className="arrival-product-price">$140.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals7.png" alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                    
                                </div>
                                <h4><a href="#">arm chair</a></h4>
                                <p className="arrival-product-price">$90.00</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src="assets/images/collection/arrivals8.png" alt="new-arrivals images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                </div>
                                <h4><a href="#">wooden bed</a></h4>
                                <p className="arrival-product-price">$140.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Products