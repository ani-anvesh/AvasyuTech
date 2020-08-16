import React, { useState, useContext } from "react";
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
import "../package1/questions.css";
import base from "../../config/FbConfig";
import { AuthContext } from "../../config/auth";
import data1 from "../QuestionsData/shivdata3";
import data2 from "../QuestionsData/shivdata2";

export default function InterTwo(props) {
  const scoreInter1 = localStorage.getItem("scoreIn1");
  const data = scoreInter1 < 15 ? data2 : data1;
  const theme = useTheme();
  const { id } = useParams();
  const maxSteps = data.length;
  const [ans, setAns] = useLocalStorage("Answers", []);
  const [number, setNumber] = useLocalStorage("QuestionNoIn2", 0);
  const [activeStep, setActiveStep] = React.useState(parseInt(number));
  const [next, setNext] = React.useState(true);
  const { userId } = useContext(AuthContext);

  const [options, setOptions] = useLocalStorage("Options", "");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNumber(activeStep + 1);
    setOptions("");
    if (activeStep >= data.length - 1) {
      setNext(false);
    }
    //console.log(score);
  };

  const handleBack = () => {
    setOptions("");
    ans.pop();
  };
  const handleAnswer = (answer) => {
    setAns((prevAns) => [
      ...prevAns,
      { QuestionNo: activeStep, Answer: answer },
    ]);
  };
  const db = base.firestore();
  function handleScoreFire() {
    db.collection("UserDataInter")
      .doc(userId)
      .set(
        {
          InterTwoAnswers: ans,
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
  console.log(ans);
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
                  pathname: `/questionsIn/${activeStep + 1}`,
                  state: props.collection,
                }}
                style={{ textDecoration: "none" }}
              >
                Next
              </Link>
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={options == ""}>
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
            xs={5}
            md={5}
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Typography variant="h4" align="center" style={{ padding: "1vh" }}>
              AVASYU
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
            xs={7}
            md={7}
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
                margin: "1vh 3vh 1vh 2.7vh",
              }}
            >
              Options
            </Typography>
            {Object.values(data.slice(activeStep - 1, activeStep)).map(
              (opt, index) =>
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
                        handleAnswer(opt.option1);
                        setOptions(opt.option1);
                      }}
                    >
                      <Paper elevation={5} className="paperOpt">
                        {opt.option1}
                      </Paper>
                    </li>
                    <li
                      onClick={() => {
                        handleAnswer(opt.option2);
                        setOptions(opt.option2);
                      }}
                    >
                      <Paper elevation={5} className="paperOpt">
                        {opt.option2}
                      </Paper>
                    </li>
                    <li
                      onClick={() => {
                        handleAnswer(opt.option3);
                        setOptions(opt.option3);
                      }}
                    >
                      <Paper elevation={5} className="paperOpt">
                        {opt.option3}
                      </Paper>
                    </li>
                    <li
                      onClick={() => {
                        handleAnswer(opt.option4);
                        setOptions(opt.option4);
                      }}
                    >
                      <Paper elevation={5} className="paperOpt">
                        {opt.option4}
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
                  pathname: `/questionsIn/${activeStep + 1}`,
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
              <Link to="/resultA" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ margin: "auto" }}
                  onClick={() => handleScoreFire()}
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
