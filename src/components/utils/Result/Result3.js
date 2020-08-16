import React from "react";
import "../utils.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import trophy from "./trophy.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import imgB from "./GB.jpeg";

export default function Result(props) {
  const score3 = localStorage.getItem("score3");

  const score1 = (parseInt(score3) / 15) * 100;

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div className="grids">
      <Grid
        container
        sm={12}
        xs={12}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "3vh",
          borderRadius: "16px",
        }}
      >
        <Grid
          item
          sm={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" onClick={handleClick()} color="primary">
              Go Back TO Home
            </Button>
          </Link>
        </Grid>
        <Grid item sm={7} xs={12} className="trophy">
          <Grid container sm={12} spacing={5}>
            <Grid item sm={12} xs={12}>
              <Paper elevation={0} className="images">
                <img src={trophy} alt="Trophy" />
                <Typography
                  variant="h4"
                  style={{ color: "#422057FF", textAlign: "center" }}
                >
                  CONGRATULATIONS...!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={5} xs={12} className="grids3">
          <Paper className="box" elevation={0}>
            <Typography
              variant="h4"
              style={{
                color: "#0099ff",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Your Overall Level card Abyadhan({props.collection}) is :
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Your level in {props.collection} area is {score1 > 0 ? score1 : 0}{" "}
              %
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Link to="/pack3/skills" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ margin: "5vh" }}
                >
                  Assess your Level in another Skill
                </Button>
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12} calssName="grids2">
          <Paper elevation={5} className="score" style={{ padding: "0.7vh" }}>
            <Typography
              variant="h5"
              align="center"
              style={{
                color: "#0099FF",
                fontWeight: "bolder",
                margin: "5vh",
                letterSpacing: "1.2px",
              }}
            >
              Hey there...! Great effort, You will get your certificate in about
              43 hrs...
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={5} xs={12} className="grids3">
          <Paper
            className="box"
            elevation={0}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography
              variant="h4"
              style={{
                color: "#422057FF",
                textAlign: "center",
                fontWeight: "bold",
                margin: "3vh",
                color: "orange",
              }}
            >
              Want to consult our Mentors
            </Typography>
            <h1 style={{ fontSize: "5vh", paddingRight: "2vh" }}>:</h1>
            <Link to="/councelling" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ padding: "1vh", textAlign: "center" }}
              >
                Click Here
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
