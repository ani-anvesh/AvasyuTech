import React, { useState, useContext, useEffect } from "react";
import "./layout.css";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import anu from "../avasyu.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../../config/auth";

export default function event() {
  const score3 = localStorage.getItem("scoreInter1");
  const number = localStorage.getItem("QuestionNoIn");
  const score1 = (parseFloat(score3) / 30) * 100;
  return (
    <AuthContext.Consumer>
      {(context) => (
        <Grid
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="rooter"
        >
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Paper
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              elevation={0}
              className="events"
            >
              <img src={anu} alt="Webinar" />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "5vh",
            }}
          >
            <Typography
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              variant="h3"
              align="center"
              color="primary"
              style={{ margin: "3vh", fontWeight: "bolder" }}
            >
              ARAMBH
              <Typography variant="h5" align="center">
                A PSYCHOMETRIC "W"(Why and What) analysis of Engineering
              </Typography>
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              variant="h5"
              align="center"
              color="textSecondary"
              style={{ margin: "3vh 1vh", fontWeight: "bolder" }}
            >
              Don't miss this enthralling opportunity with ARAMBH which helps
              you do away with boredom in this lockdown.
            </Typography>
            {context.userId !== null && score3 == null && number == null ? (
              <Link to="/questionIn/:id" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "5vh auto 5vh auto",
                    display: "flex",
                    zIndex: 3,
                  }}
                >
                  Take Test
                </Button>
              </Link>
            ) : context.userId !== null && score3 == null && number <= 30 ? (
              <Link to="/questionIn/:id" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "5vh auto 5vh auto",
                    display: "flex",
                    zIndex: 3,
                  }}
                >
                  Take Test
                </Button>
              </Link>
            ) : context.userId !== null && score3 != null && number <= 30 ? (
              <Link to="/questionIn/:id" style={{ textDecoration: "none" }}>
                <Button
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "5vh auto 5vh auto",
                    display: "flex",
                    zIndex: 3,
                  }}
                >
                  Take Test
                </Button>
              </Link>
            ) : context.userId !== null && score3 != null && number > 30 ? (
              <Button
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                variant="outlined"
                color="primary"
                style={{
                  margin: "5vh auto 5vh auto",
                  zIndex: 3,
                  display: "flex",
                }}
              >
                You have already taken your test
              </Button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  variant="outlined"
                  color="primary"
                  style={{
                    margin: "5vh auto 5vh auto",
                    zIndex: 3,
                    display: "flex",
                  }}
                >
                  Take Test
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
      )}
    </AuthContext.Consumer>
  );
}
