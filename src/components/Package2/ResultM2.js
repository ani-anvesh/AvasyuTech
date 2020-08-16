import React, { useState, useContext, useEffect } from "react";
import "../package1/questions.css";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import badgeO from "../package1/badgeO.jpeg";
import base from "../../config/FbConfig";
import { AuthContext } from "../../config/auth";

export default function ResultM2() {
  const scoreRed2 = localStorage.getItem("scorered2");
  const scoreOrange2 = localStorage.getItem("scoreorange2");
  const scoreGreen2 = localStorage.getItem("scoregreen2");
  const scores1 = parseInt(scoreRed2);
  const scores2 = parseInt(scoreOrange2);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const { userId, userName } = useContext(AuthContext);
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
    <div>
      <Grid container sm={12} xs={12}>
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
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClick()}
              style={{ padding: "2vh", margin: "3vh" }}
            >
              Go Back TO Home
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} className="gidse">
          <Paper elevation={7} className="redO">
            <Typography variant="h6" align="center">
              Sorry...! {userName} Your overall Agregate of score in RED and
              ORANGE level is not above 70%, by this you will end your test
              here.
            </Typography>
          </Paper>
          <Paper elevation={7} className="redO">
            <Typography variant="h5" align="center">
              But we have a certificate from our side for you...
            </Typography>
          </Paper>
          {/*  <Button
            variant="outlined"
            color="secondary"
            style={{ padding: "2vh" }}
          >
            Download Certificate
          </Button> */}
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
            Hey there...! {userName} Great effort,
            You will get your certificate in about 43 hrs...
          </Typography>
        </Grid>

        <Grid item sm={6} xs={12} className="gridse">
          <Paper className="redO" elevation={7}>
            <Typography
              variant="h4"
              style={{
                color: "#0099ff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Your Overall Score Card in Adhvan is :
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Score in Red Zone :
              {data.scoreRed2 ? data.scoreRed2 : scores1 > 0 ? scores1 : 0}
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
              {data.scoreOrange2
                ? data.scoreOrange2
                : scores2 > 0
                ? scores2
                : 0}
            </Typography>
            <img src={badgeO} alt="Orange Badge" />
            <div
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
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
