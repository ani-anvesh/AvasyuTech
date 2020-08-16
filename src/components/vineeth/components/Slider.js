
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css'
export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className:"slider",
        autoplay: true,
    
        autoplaySpeed: 1200,
        cssEase: "linear",
        pauseOnHover: true,
        focusOnSelect: true,
        speed: 500,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
      };
      return (
          <>
       
        <div className="mm">
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div className="mm1">
            <h3>1</h3>
            </div>
            <div className="mm1">
              <h3>2</h3>
            </div>
            <div className="mm1">
              <h3>3</h3>
            </div>
            <div className="mm1">
              <h3>4</h3>
            </div>
            <div className="mm1">
              <h3>5</h3>
            </div>
            <div className="mm1">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        </>
      );
    }
  }
