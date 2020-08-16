import React from "react";
import { Grid, Paper, Typography, Button, Divider } from "@material-ui/core";
import image1 from "../vineeth/components/images/47.jpg";
import image2 from "../vineeth/components/images/a.jpg";
import image3 from "../vineeth/components/images/d.jpeg";
import image4 from "../vineeth/components/images/j.jpeg";
import image5 from "../vineeth/components/images/m4.jpg";
import image6 from "../vineeth/components/images/11.jpg";
import image7 from "../vineeth/components/images/16.jpg";
import image8 from "../vineeth/components/images/m1.png";
import image9 from "../vineeth/components/images/m3.jpg";
import image10 from "../vineeth/components/images/m22.jpg";
import image12 from "../vineeth/components/images/m5555.jpg";
import image13 from "../vineeth/components/images/m6.jpg";
import image14 from "../vineeth/components/images/13.jpg";
import image15 from "../vineeth/components/images/12.jpg";
import image16 from "../vineeth/components/images/14.jpg";
import image17 from "../vineeth/components/images/15.jpg";
import image19 from "../vineeth/components/images/17.jpg";
import image22 from "../vineeth/components/images/manish.jpeg";
import image23 from "../vineeth/components/images/mentorL.jpeg";

import "./layout.css";

const menDat = [
  {
    img: image1,
    title: "Dr.M.K.Kaushik",
    author: "PhD from BITS Pilani",
  },
  {
    img: image2,
    title: "Dr.A.chandramouli",
    author: "PhD from IIT Delhi",
  },
  {
    img: image3,
    title: "Dr.Durga Hari Kiran",
    author: "PhD from NIT Warangal",
  },
  {
    img: image4,
    title: "Dr.C.Jaya Lakshmi",
    author: "Psychologist",
  },
  {
    img: image23,
    title: "Dr.Suresh Kumar",
    author: "Management expert & Leadership Coach",
  },
  {
    img: image22,
    title: "Manish Kumar Gutta",
    author: "CEO, OutShade Digital Media",
  },
  {
    img: image19,
    title: "Sachin Pandey",
    author: "CEO, SkillShip",
  },
  {
    img: image7,
    title: "Dr.Suresh Kumar",
    author: "Assistant Professor",
  },
  {
    img: image17,
    title: "CChandrappa",
    author: "Life Skills Coach",
  },
  {
    img: image5,
    title: "Sushma Raghavi",
    author: "Graduate from BITS Pilani",
  },
  {
    img: image6,
    title: "Edna",
    author: "Diploma from Newyork",
  },
  {
    img: image8,
    title: "M.V.R.Sheshamani",
    author: "Diploma in Music",
  },
  {
    img: image9,
    title: "Bobby Veera",
    author: "Zumba Dancer",
  },
  {
    img: image10,
    title: "Mohan Suri",
    author: "Flutist from Hyderabad",
  },
  {
    img: image12,
    title: "Radha Rani",
    author: "Psychologist & Yoga Teacher",
  },
  {
    img: image13,
    title: "Sharmila",
    author: "Artist from Dubai",
  },
  {
    img: image14,
    title: "Mohan Rao",
    author: "Digital Safety Activist",
  },
  {
    img: image15,
    title: "Dr.Chaitra pargoakar",
    author: "Psychologist",
  },
  {
    img: image16,
    title: "Divya",
    author: "Psychologist",
  },
];

export default function Mentors2() {
  return (
    <Grid container xs={12} md={12} lg={12} xl={12}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Typography
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          variant="h3"
          align="center"
          style={{
            fontWeight: "bolder",
            color: "#0099FF",
            letterSpacing: "1.4px",
            margin: "1.6vh 0vh",
          }}
        >
          Our <b style={{ color: "#000000", fontSize: "4.8vh" }}>Mentors</b>
        </Typography>
        <Divider
          style={{ margin: "0vh 9vh", fontSize: "5vh", color: "#000000" }}
        />
      </Grid>
      {menDat.map((item, index) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          className="mengid"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Paper elevation={5} className="menpap">
            <img src={item.img} alt={item.title} />
            <Typography
              variant="h5"
              className="mentype"
              align="center"
              style={{
                fontWeight: "bolder",
                color: "#0099FF",
                letterSpacing: "1.4px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              className="mentype"
              align="center"
              style={{
                fontWeight: "bolder",
                color: "grey",
                letterSpacing: "0.9px",
                padding: "1vh",
              }}
            >
              {item.author}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
