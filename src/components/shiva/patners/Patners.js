import React from "react";
import "./patners.css";
const Patners = () => {
  return (
    <div className="M">
      <div className="heading">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Our <b>Partners</b>
        </h1>
      </div>
      <div className="main-container44">
        <div className="container12">
          <a
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="item"
          >
            <img
              src={require("../imagesP/bp1.png")}
              style={{ width: "100%", height: "100px" }}
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="item"
          >
            <img
              src={require("../imagesP/bp2.png")}
              style={{
                width: "100%",
                height: "100px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="item"
          >
            <img
              src={require("../imagesP/bp3.png")}
              style={{ width: "100%", height: "100px" }}
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="item"
          >
            <img
              src={require("../imagesP/bp5.png")}
              style={{ width: "100%", height: "100px" }}
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="item"
          >
            <img
              src={require("../imagesP/bp6.png")}
              style={{ width: "100%", height: "100px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Patners;
