import React, { useState, useContext } from "react";
import base from "../../config/FbConfig";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router";
import { useLocalStorage } from "../utils/localStorage";
import "./questions.css";
import Timer from "react-compound-timer";
import { AuthContext } from "../../config/auth";

export default function Three(props) {
  const data1 = props.data1.slice(8, 13);
  const data2 = props.data2.slice(9, 14);
  const data3 = props.data3.slice(16, 21);
  const data = [];
  data.push(...data1, ...data2, ...data3);
  //console.log(data);
  //console.log(props);
  const theme = useTheme();
  const { id } = useParams();
  const maxSteps = data.length;
  const [number, setNumber] = useLocalStorage("QuestionNogreen1", 0);
  const [activeStep, setActiveStep] = React.useState(parseInt(number));
  const [options, setOptions] = React.useState("");
  const [score, setScore] = useLocalStorage("scoregreen1", 0);
  const [next, setNext] = React.useState(true);
  const { userId } = useContext(AuthContext);

  const [local, setLocal] = useState({
    red1:
      parseInt(localStorage.getItem("scorered1")) > 0
        ? parseInt(localStorage.getItem("scorered1"))
        : 0,
    orange1:
      parseInt(localStorage.getItem("scoreorange1")) > 0
        ? parseInt(localStorage.getItem("scoreorange1"))
        : 0,
    green1: 0,
  });
  /*   const scoreRed1 = localStorage.getItem("scorered1");
  const scoreOrange1 = localStorage.getItem("scoreorange1");*/
  /* const scoreGreen1 = localStorage.getItem("scoregreen1");
  const score3 = parseInt(scoreGreen1); */

  //console.log(local);
  //console.log(userId, typeof userId);
  const db = base.firestore();
  function handleScoreFire() {
    db.collection("UserData")
      .doc(userId)
      .set(
        {
          scoreRed1: local.red1,
          scoreOrange1: local.orange1,
          scoreGreen1: local.green1,
        },
        { merge: true }
      )
      .then(function () {
        //alert("Document successfully written!");
      })
      .catch(function (error) {
        //alert("Error writing document: ", error);
      });
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNumber(activeStep + 1);
    setOptions("");
    setLocal({
      ...local,
      green1:
        parseInt(localStorage.getItem("scoregreen1")) > 0
          ? parseInt(localStorage.getItem("scoregreen1"))
          : 0,
    });
    if (activeStep >= 14) {
      setNext(false);
    }
    //console.log(score);
  };
  const handleScore = (answer, option) => {
    if (answer == option) {
      setScore((score) => score + 1);
      //console.log(option);
      //console.log("write answer bro");
    } else {
      //console.log("wrong answer");
      //console.log(option);
    }
  };

  const handleBack = () => {
    setOptions("");
  };

  return (
    <div>
      <Paper className="root">
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          className="roots"
          activeStep={activeStep - 1}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep - 1 === maxSteps - 1}
            >
              <Link
                to={{
                  pathname: `/questions/${activeStep + 1}`,
                  state: props.collection,
                }}
                style={{ textDecoration: "none" }}
              >
                Next
              </Link>
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <Grid container xs={12} md={12}>
          <Grid
            item
            xs={4}
            md={4}
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Typography variant="h4" align="center" style={{ padding: "1vh" }}>
              Zone:{" "}
              <span
                style={{
                  fontSize: "4.5vh",
                  color: "#18cE00",
                  fontWeight: "bolder",
                }}
              >
                Green
              </span>
            </Typography>
            <Typography variant="h5" align="center">
              Click{" "}
              <span
                style={{
                  fontSize: "2.7vh",
                  color: "#69BDFF",
                  fontWeight: "bolder",
                }}
              >
                NEXT
              </span>{" "}
              to Continue
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            md={5}
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Typography
              variant="h4"
              align="center"
              style={{ color: "#0099FF", margin: "1vh", padding: "1vh" }}
            >
              Questions : {activeStep}/{maxSteps}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            style={{
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Timer
              initialTime={2700000}
              direction="backward"
              checkpoints={[
                {
                  time: 0,
                  callback: () => {
                    setActiveStep("End");
                    setNext(false);
                  },
                },
              ]}
            >
              {() => (
                <React.Fragment>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{
                      color: "#0099FF",
                      margin: "1vh 0vh 0.5 0vh",
                      padding: "1vh",
                    }}
                  >
                    Your Time Ends in :
                  </Typography>
                  <div
                    style={{
                      margin: "0.5vh",
                      fontSize: "3.6vh",
                      fontWeight: "bolder",
                    }}
                  >
                    <Timer.Minutes /> : <Timer.Seconds />
                  </div>
                </React.Fragment>
              )}
            </Timer>
          </Grid>
          <Grid items xs={12} md={6} className="gid1">
            {Object.values(data.slice(activeStep - 1, activeStep)).map(
              (ques) => (
                <>
                  <Paper elevation={5} className="paperQuest">
                    <Typography
                      variant="h4"
                      align="center"
                      style={{
                        color: "#0099FF",
                        fontWeight: "bolder",
                        borderBottom: "1.4px solid grey",
                        paddingBottom: "0.9vh",
                      }}
                    >
                      Question
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      className="question"
                    >
                      {ques.question}
                    </Typography>
                  </Paper>
                </>
              )
            )}
          </Grid>
          <Grid item xs={12} md={6} className="gid2">
            <Typography
              variant="h4"
              align="center"
              style={{
                color: "#0099FF",
                fontWeight: "bolder",
                borderBottom: "1.4px solid grey",
                paddingBottom: "0.9vh",
                margin: "1vh 3vh 1vh vh",
              }}
            >
              Options
            </Typography>
            {Object.values(data.slice(activeStep - 1, activeStep)).map((opt) =>
              options ? (
                <ul>
                  <li>
                    <Paper elevation={5} className="paperOpt">
                      {options}
                    </Paper>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li
                    onClick={() => {
                      handleScore(opt.answer, opt.options[0]);
                      setOptions(opt.options[0]);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.options[0]}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(opt.answer, opt.options[1]);
                      setOptions(opt.options[1]);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.options[1]}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(opt.answer, opt.options[2]);
                      setOptions(opt.options[2]);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.options[2]}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(opt.answer, opt.options[3]);
                      setOptions(opt.options[3]);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.options[3]}
                    </Paper>
                  </li>
                </ul>
              )
            )}
          </Grid>
          {next ? (
            <Grid
              container
              xs={12}
              style={{
                justifyContent: "center",

                alignContent: "center",
              }}
            >
              <Link
                to={{
                  pathname: `/questions/${activeStep + 1}`,
                  state: props.collection,
                }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNext}
                  style={{ margin: "auto" }}
                >
                  Next
                </Button>
              </Link>
            </Grid>
          ) : (
            <Grid
              container
              xs={12}
              style={{
                justifyContent: "center",

                alignContent: "center",
              }}
            >
              <Link to="/result" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ margin: "auto" }}
                  onClick={() => {
                    setLocal({
                      ...local,
                      green1:
                        parseInt(localStorage.getItem("scoregreen1")) > 0
                          ? parseInt(localStorage.getItem("scoregreen1"))
                          : 0,
                    });
                    handleScoreFire();
                  }}
                >
                  Submit
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
