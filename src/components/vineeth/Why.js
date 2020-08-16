import React from "react";
import "./style4.css";
import img52 from "./reading.jpg";
import { SocialIcon } from "react-social-icons";
const Why = () => {
  return (
    <div style={{ position: "static", padding: "1vh 0vh" }}>
      <div>
        <div className="kil1">
          <div className="kil">
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              What is <b>Avasyu</b>?{" "}
            </h2>
            <p
              style={{ padding: "0vh 3vh 0vh 0vh" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Cloning to the capture of camera lens, a visual leaps to extract
              an exact copy of the information viewed rather than what we read
              or hear. Then why is this wait..! Have a sneak peek of what AVASYU
              offers through this video.
            </p>

            <iframe
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="vid"
              style={{ borderRadius: "5px" }}
              src="https://www.youtube.com/embed/n7FIa9yaieE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="pubg">
            <img
              src={img52}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
