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
                    {data.map(e =>(
                        <div className="col-md-3 col-sm-4">
                            <div className="single-new-arrival">
                                <div className="single-new-arrival-bg">
                                    <img src={e.imageURLs[0]} alt="products images" />
                                    <div className="single-new-arrival-bg-overlay"></div>
                                    
                                    
                                </div>
                                <h4><a href="#">{e.fulhausProductName}</a></h4>
                                <p className="arrival-product-price">{e.retailPrice}</p>
                            </div>
                        </div>
                    ))}    
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Products
