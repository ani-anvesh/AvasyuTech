import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import post1 from "./imges/post3.jpeg";
import post2 from "./imges/post1.jpeg";
import post3 from "./imges/post2.jpeg";
import webi from "./imges/webi.jpeg";
import anu from "./imges/anu.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    text: "ANTHARPRERANA",
    data:
      "SANKALP-Codeathon is the happening event now. All the coding aspirants, here is a chance to grab your turn and show your coding skills.",
    imgPath: post3,
    path: "/packages",
    button: "coming Soon",
  },
  {
    text: "ANUGRAHAK",
    data:
      "Don't miss this enthralling opportunity with ANUGRAHAK which helps you do away with boredom in this lockdown.",
    imgPath: anu,
    button: "Ended",
  },
  {
    text: "WEBINAR 1.0",
    data:
      "AvasyuTech has conducted its first ever webinar on topic how to deal differences between Students and Parents.Our resource person is C.Jayalakshmi who has an 25years experience as psychologist",
    imgPath: webi,
    state: "data",
    button: "Ended",
  },
  {
    text: "ANTHARPRERANA",
    data:
      "ANTHARPRERANA, a mission of VIBA to flourish the entrepreneurial aura into budding youth of this gen and establish a thought of self-dependacy in them.",
    imgPath: post1,
    path: "/packages",
    button: "coming Soon",
  },
  {
    text: "ANTHARPRERANA",
    data:
      "This mission is accomplised in three conducts as Blogathon, Codeathon and Customer-ON events.Our event 'RACHANA' Blogathon, was organized successfully. It was for conducted solely for content writers.Now, 'SANKALP' Codeathon is an ongoing event which is exclusively for coding enthusiasts.",
    imgPath: post2,
    path: "/packages",
    button: "coming Soon",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    paddingTop: "5vh",
    paddingRight: "7vw",
    paddingLeft: "7vw",
    marginTop: "7vh",
    position: "static",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "45vh",
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container xs={12} style={{ margin: "5vh 0vh" }}>
          <Grid
            xs={12}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Typography
              variant="h4"
              align="center"
              style={{
                color: "#0099FF",
                letterSpacing: "1.2px",
                fontWeight: "bolder",
              }}
            >
              Events
            </Typography>
          </Grid>
        </Grid>

        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "3vh 0vh",
                }}
              >
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <Typography
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      variant="h4"
                      align="center"
                      color="primary"
                      style={{
                        letterSpacing: "1.2px",
                        fontWeight: "bolder",
                      }}
                    >
                      {step.text}
                    </Typography>
                    <Typography
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      variant="h6"
                      align="center"
                      style={{
                        margin: "3vh",
                        textAlign: "justify",
                        textJustify: "inner-word",
                      }}
                    >
                      {step.data}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={{
                          pathname: step.path,
                          state: step.state,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="outlined"
                          color="secondary"
                          style={{
                            margin: "3vh",
                            padding: "0.9vh",
                            alignSelf: "center",
                          }}
                        >
                          {step.button}
                        </Button>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{
                  padding: "0vh 3vh",
                }}
              >
                <Grid container justify="space-evenly" alignItems="center">
                  <Grid item>
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <img
                          className={classes.img}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          style={{
            backgroundColor: "#FFFFFF",
            minWidth: "100%",
            margin: "3vh 0vh",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </>
  );
}

export default SwipeableTextMobileStepper;
