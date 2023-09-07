'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import Cart from "./cart";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 
    return (
      <div>
     
        <Slider {...settings}>
         {[<Cart/>,<Cart/>,<Cart/>,<Cart/>,<Cart/>].map((item,index)=>{return <div key={index} > {item}</div>}) }
        </Slider>
      </div>
    );
  }
}