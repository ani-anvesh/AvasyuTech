import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avasyu from "./avasyu.png";
import "./Home.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import home from "./home.jpeg";
import { AuthContext } from "../config/auth";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(9),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div style={{ maxHeight: "100%", position: "static" }}>
      <Grid
        container
        xs={12}
        lg={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="rootu"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid item xs={12} lg={12} sm={12} md={12} className="right1">
            <Avatar
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              variant="rounded"
              alt="AVASYU"
              src={avasyu}
              className={classes.large}
              style={{ margin: "1.4vh" }}
            />
          </Grid>
          <Typography
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            variant="h1"
            align="center"
            className="namer"
            style={{ fontWeight: "bold" }}
          >
            AVASYU
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            variant="h6"
            align="left"
            className="namer1"
            style={{ padding: "1vh" }}
          >
            where can you find an absolute bliss rather than pursuing a career
            of your desire...! AVASYU is here to offer you such a space of
            certainity to explore your innate being and prosper in your
            endeavours alongside.
          </Typography>
          <div
            className="right0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <AuthContext.Consumer>
              {(context) =>
                context.userId !== null ? (
                  <Link to="/Events" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ padding: "0.9vh", margin: "1.8vh auto" }}
                    >
                      ARAMBH
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ padding: "0.9vh", margin: "1.8vh auto" }}
                    >
                      ARAMBH
                    </Button>
                  </Link>
                )
              }
            </AuthContext.Consumer>

            <iframe
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="videoM"
              style={{ borderRadius: "9px" }}
              src="https://www.youtube.com/embed/mE_CjVRDKrs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Grid
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            items
            xs={12}
            lg={6}
            sm={12}
            md={6}
            xl={6}
            className="right2"
          >
            <a
              href="https://instagram.com/avasyutechnicals?igshid=akohikxvo60a"
              style={{ color: "#000000", padding: "0vh 3vh" }}
            >
              <InstagramIcon fontSize="large" />
            </a>

            <a
              href="https://www.facebook.com/avasyutechnicals.avasyutechnicals.5"
              style={{ color: "#000000", padding: "0vh 3vh" }}
            >
              <FacebookIcon fontSize="large" />
            </a>

            <a
              href="https://www.twitter.com"
              style={{ color: "#000000", padding: "0vh 3vh" }}
            >
              <TwitterIcon fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/company/viba-vaagdevi-incubation-and-business-accelerator"
              style={{ color: "#000000", padding: "0vh 3vh" }}
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </Grid>
          <Grid
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            item
            xs={12}
            lg={6}
            sm={12}
            md={6}
            xl={6}
            className="right3"
          >
            <ul>
              <li>
                <CallIcon fontSize="large" />
              </li>
              <li>8978096433</li>
              <li>
                <MailIcon fontSize="large" />
              </li>
              <li>
                <Typography variant="h6" align="center" noWrap>
                  avasyutechnicals@gmail.com
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12} md={6} xl={6} lg={6}>
          <div className="left1"></div>
        </Grid>
      </Grid>
    </div>
  );
}
