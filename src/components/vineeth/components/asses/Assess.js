import React from "react";
import "./assess.css";
import { Grid, Typography, Paper } from "@material-ui/core";

const info = [
  {
    head: "JOb Opportunities",
    info:
      "The ultimate reach in the chase of acquiring skills is to secure a job. We assure to guide and improve you in the sphere of your interest and place you in a job role that suits your skills.",
  },
  {
    head: "Self Assesment",
    info:
      "We initially analyze you with a basic questionnaire quiz. It enables you to self-assess and gives us a scale of your potent with basics through which we can guide you accordingly.",
  },
  {
    head: "Mentorship",
    info:
      " Mentor is the one who helps you to explore your field of passion. We provide the best mentors who helps you in every domain and are available at anytime to assist you.",
  },
];
const Assess = () => {
  return (
    <Grid
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      container
      xs={12}
      md={12}
      className="assesMg"
    >
      <Grid item xs={12} md={12} className="assesG">
        <Typography
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          variant="h4"
          align="center"
          className="assesT"
          style={{
            fontWeight: "bolder",
            letterSpacing: "1.2px",
            color: "#FFFFFF",
          }}
        >
          Explore Yourself
        </Typography>
      </Grid>
      {info.map((item) => (
        <Grid
          item
          xs={12}
          md={4}
          className="assesG"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Paper elevation={5} className="assesPe">
            <Typography
              variant="h5"
              align="center"
              className="assesT"
              style={{
                fontWeight: "bolder",
                letterSpacing: "1.2px",
                color: "#0099FF",
              }}
            >
              {item.head}
            </Typography>
          </Paper>
          <Paper
            elevation={5}
            className="assesP"
            style={{ borderRadius: "9px" }}
          >
            <Typography variant="h6" align="center" className="assesT">
              {item.info}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Assess;
