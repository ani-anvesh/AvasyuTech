import React, { useState, useContext, useEffect } from "react";
import "../utils.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import trophy from "./trophy.png";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import base from "../../../config/FbConfig";
import { AuthContext } from "../../../config/auth";

export default function Result(props) {
  const score3 = localStorage.getItem("scoreIn1");
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const { userId, userName } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("UserDataInter")
      .doc(userId)
      .onSnapshot(function (doc) {
        const newData = doc.data();
        setData(newData);
        setLoding(!loding);
      });
    return () => unsubscribe();
  }, []);
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
            paddingBottom: "1.6vh",
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
                  align="center"
                  style={{ color: "#422057FF" }}
                >
                  Hello...! {userName}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
       
        <Grid item sm={5} xs={12} calssName="grids2">
          <Paper elevation={5} className="score" style={{ padding: "0.7vh" }}>
            <Typography
              variant="h6"
              align="center"
              style={{
                color: "#0099FF",
                fontWeight: "bolder",
                margin: "5vh",
                letterSpacing: "1.2px",
              }}
            >
              {data.scoreIn1 < 15
                ? "Thank you for making way to assess yourself. Hope you got a vivid picture of how to choose a career of your interest, apart from engineering by the thought process we engaged in you through this test. Wishing you the best to prosper in your chosen career path"
                : "Thank you for taking the test with a clear intution of choosing engineering as your career option. Hope this assessment test helped you to give an added dimension to your thoughts. May you find admission into the best engineering college you coveted for. Wishing you the best"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} xs={12} className="grids3">
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
