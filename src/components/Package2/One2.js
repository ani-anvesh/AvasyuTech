import React from "react";
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
import PopUp2 from "./PopUp2";

export default function One2(props) {
  const data = props.data.slice(0, 15);
  const theme = useTheme();
  const { id } = useParams();
  const maxSteps = data.length;
  const [number, setNumber] = useLocalStorage("QuestionNoRed2", 0);
  const [activeStep, setActiveStep] = React.useState(parseInt(number));
  const [next, setNext] = React.useState(true);

  const [options, setOptions] = React.useState("");
  const [score, setScore] = useLocalStorage("scorered2", 0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNumber(activeStep + 1);
    setOptions("");
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
                  pathname: `/question/${activeStep + 1}`,
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
            xs={5}
            md={5}
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Typography variant="h4" align="center" style={{ padding: "1vh" }}>
              Zone:{" "}
              <span
                style={{
                  fontSize: "4.5vh",
                  color: "#F93822FF",
                  fontWeight: "bolder",
                }}
              >
                Red
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
                  pathname: `/question/${activeStep + 1}`,
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
              <PopUp2 zone={props.zone} collection={props.collection} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
