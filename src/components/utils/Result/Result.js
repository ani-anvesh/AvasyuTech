import React, { useState, useContext, useEffect } from "react";
import "../utils.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import trophy from "./trophy.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import imgB from "./GB.jpeg";
import base from "../../../config/FbConfig";
import { AuthContext } from "../../../config/auth";

export default function Result() {
  const scoreRed1 = localStorage.getItem("scorered1");
  const scoreOrange1 = localStorage.getItem("scoreorange1");
  const scoreGreen1 = localStorage.getItem("scoregreen1");
  const score1 = parseInt(scoreRed1);
  const score2 = parseInt(scoreOrange1);
  const score3 = parseInt(scoreGreen1);
  //console.log(score1, score2, score3);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const { userId } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.clear();
  };
  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("UserData")
      .doc(userId)
      .onSnapshot(function (doc) {
        const newData = doc.data();
        setData(newData);
        setLoding(!loding);
      });
    return () => unsubscribe();
  }, []);
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
                  CONGRATULATIONS...!{" "}
                  <b
                    style={{
                      fontSize: "4.3vh",
                      textAlign: "center",
                      fontWeight: "bolder",
                      color: "#0099FF",
                      marginTop: "0vh 0.7vh",
                    }}
                  >
                    {data.firstName + " " + data.lastName}
                  </b>
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
              Your Overall Score Card in Agrepadh is :
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Score in Red Zone :{" "}
              {data.scoreRed1 ? data.scoreRed1 : score1 > 0 ? score1 : 0}
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Score in Orange Zone :{" "}
              {data.scoreOrange1 ? data.scoreOrange1 : score2 > 0 ? score2 : 0}
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Score in Green Zone:{" "}
              {data.scoreGreen1 ? data.scoreGreen1 : score3 > 0 ? score3 : 0}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12} calssName="grids2">
          <Paper elevation={5} className="score" style={{ padding: "0.7vh" }}>
            <img src={imgB} alt="Green Badge" />
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
