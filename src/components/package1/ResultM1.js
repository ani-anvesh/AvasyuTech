import React, { useState, useContext, useEffect } from "react";
import "./questions.css";
import { Link } from "react-router-dom";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import badgeO from "./badgeO.jpeg";
import base from "../../config/FbConfig";
import { AuthContext } from "../../config/auth";

export default function ResultM1() {
  const scoreRed1 = localStorage.getItem("scorered1");
  const scoreOrange1 = localStorage.getItem("scoreorange1");
  const scoreGreen1 = localStorage.getItem("scoregreen1");
  const score1 = parseInt(scoreRed1);
  const score2 = parseInt(scoreOrange1);
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
              onClick={handleClick()}
              color="primary"
              style={{ padding: "2vh", margin: "3vh" }}
            >
              Go Back TO Home
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} className="gidse">
          <Paper elevation={7} className="redO">
            <Typography variant="h6" align="center">
              Sorry...! {data.firstName + " " + data.lastName} Your overall
              Agregate of score in RED and ORANGE level is not above 70%, by
              this you will end your test here.
            </Typography>
          </Paper>
          <Paper elevation={7} className="redO">
            <Typography variant="h5" align="center">
              But we have a certificate from our side for you...
            </Typography>
          </Paper>
          {/*           <Button
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
            Hey there...! {data.firstName + " " + data.lastName} Great effort,
            You will get your certificate in about 43 hrs...
          </Typography>
        </Grid>

        <Grid item sm={6} xs={12} className="gidse">
          <Paper className="redO" elevation={7}>
            <Typography
              variant="h4"
              style={{
                color: "#0099ff",
                textAlign: "center",
                fontWeight: "bold",
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
