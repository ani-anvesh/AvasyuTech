import React from "react";
import { SocialIcon } from "react-social-icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "./style.css";
const Fo = () => {
  return (
    <div>
      <footer
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        class="footer-distributed"
      >
        <div class="footer-left1">
          <h3>
            Avasyu<span1>Tech</span1>
          </h3>

          <p class="footer-company-name">Avasyu &copy; 2020</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Vaagdevi Incubation & Business Accelerator</span>{" "}
              Warangal,Telangana, India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 9100471788</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:avasyutechnicals@gmail.com">
                avasyutechnicals@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right1">
          <p class="footer-company-about">
            <span>About the company</span>
            AVASYU is a platform which enables students to ascertain the innate
            capabilities in oneself, leading a journey towards their dream
            career. A great place to step in for student enthusiasts..!
          </p>

          <div class="footer-icons">
            <a
              href="https://instagram.com/avasyutechnicals?igshid=akohikxvo60a"
              style={{ color: "#FFFFFF" }}
            >
              <InstagramIcon fontSize="large" />
            </a>

            <a
              href="https://www.facebook.com/avasyutechnicals.avasyutechnicals.5"
              style={{ color: "#FFFFFF" }}
            >
              <FacebookIcon fontSize="large" />
            </a>

            <a href="https://www.twitter.com" style={{ color: "#FFFFFF" }}>
              <TwitterIcon fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/company/viba-vaagdevi-incubation-and-business-accelerator"
              style={{ color: "#FFFFFF" }}
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fo;
