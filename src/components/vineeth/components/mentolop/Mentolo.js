import React, { Component } from "react";
import Slider from "react-slick";
import "./mentolo.css";

class Mentolo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      className: "slider",
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="vi-maingrid">
          <Slider {...settings}>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain1">
                  <div className="vi-halfcard">
                    <h11>Dr.M.K.Koushik</h11>
                    <h2>CEO,Viba</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain2">
                  <div className="vi-halfcard">
                    <h11>Dr.A.Chandramouli</h11>
                    <h2>Advisor,Viba</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain3">
                  <div className="vi-halfcard">
                    <h11 style={{ fontSize: "25px" }}>Dr.Durga Hari Kiran</h11>
                    <h2>Head Mentor,Viba</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain4">
                  <div className="vi-halfcard">
                    <h11>Dr.Jayalakshmi</h11>
                    <h2>Psychologist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain5">
                  <div className="vi-halfcard">
                    <h11>M.V.R.Sheshamani</h11>
                    <h2>Singer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain6">
                  <div className="vi-halfcard">
                    <h11>Bobby veera </h11>
                    <h2>Dancer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain7">
                  <div className="vi-halfcard">
                    <h11>Mohan Suri</h11>
                    <h2>Flutist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain8">
                  <div className="vi-halfcard">
                    <h11>Sushma raghavi</h11>
                    <h2>Director</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain9">
                  <div className="vi-halfcard">
                    <h11>Radha rani</h11>
                    <h2>Yoga teacher</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain10">
                  <div className="vi-halfcard">
                    <h11>Shermila</h11>
                    <h2>Artist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain11">
                  <div className="vi-halfcard">
                    <h11>Edna</h11>
                    <h2>English Trainer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain16">
                  <div className="vi-halfcard">
                    <h11 style={{ fontSize: "25px" }}>Dr.Chitra Pargoakar</h11>
                    <h2>Psychologist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain13">
                  <div className="vi-halfcard">
                    <h11>Mohan Rao</h11>
                    <h2>Digital Safety Activist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain14">
                  <div className="vi-halfcard">
                    <h11>Divya</h11>
                    <h2>Psychologist</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain15">
                  <div className="vi-halfcard">
                    <h11>Chandrappa</h11>
                    <h2>Motivational Speaker</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain17">
                  <div className="vi-halfcard">
                    <h11>Dr.Suresh Kumar</h11>
                    <h2>Assistant Professor</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="vi-subgrid">
              <div className="vi-main">
                <div className="vi-submain18">
                  <div className="vi-halfcard">
                    <h11>Sachin Pandey</h11>
                    <h2>CEO,Skillship Foundation</h2>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export default Mentolo;
