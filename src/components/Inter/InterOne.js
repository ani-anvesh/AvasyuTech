import React, { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import { useLocalStorage } from "../utils/localStorage";
import "../package1/questions.css";
import data from "../QuestionsData/shivdata";
import PopUpInter from "./PopUpInter";

export default function InterOne(props) {
  const theme = useTheme();
  const maxSteps = data.length;
  const [number, setNumber] = useLocalStorage("QuestionNoIn1", 0);
  const [next, setNext] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(parseInt(number));
  const [options, setOptions] = useLocalStorage("Options", 0);
  const [score, setScore] = useLocalStorage("scoreIn1", 0);
  const [scores, setScores] = useLocalStorage("scoresIn1", 0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNumber(activeStep + 1);
    setOptions("");
    setScores(score);
    if (score >= 20 || activeStep >= data.length - 1) {
      setNext(false);
    }
  };
  const handleScore = (option, weightage) => {
    setScore((score) => score + weightage);
    //console.log(typeof weightage);
  };

  const handleBack = () => {
    setOptions("");
    setScore(scores);
  };
  return (
    <div>
      <Paper elevation={0} className="root">
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          className="roots"
          activeStep={activeStep - 1}
          nextButton={
            <Link
              to={{
                pathname: `/questionIn/${activeStep + 1}`,
                state: props.collection,
              }}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep - 1 === maxSteps - 1 || options == ""}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            </Link>
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
            <>
              <Typography
                variant="h4"
                align="center"
                style={{
                  padding: "1vh",
                  color: "#0099FF",
                }}
              >
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
            </>
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
                      handleScore(
                        opt.option1.option,
                        parseFloat(opt.option1.weightage)
                      );
                      setOptions(opt.option1.option);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.option1.option}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(
                        opt.option2.option,
                        parseFloat(opt.option2.weightage)
                      );
                      setOptions(opt.option2.option);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.option2.option}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(
                        opt.option3.option,
                        parseFloat(opt.option3.weightage)
                      );
                      setOptions(opt.option3.option);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.option3.option}
                    </Paper>
                  </li>
                  <li
                    onClick={() => {
                      handleScore(
                        opt.option4.option,
                        parseFloat(opt.option4.weightage)
                      );
                      setOptions(opt.option4.option);
                    }}
                  >
                    <Paper elevation={5} className="paperOpt">
                      {opt.option4.option}
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
                  pathname: `/questionIn/${activeStep + 1}`,
                }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNext}
                  disabled={activeStep > 0 && options == ""}
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
              <PopUpInter />
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
