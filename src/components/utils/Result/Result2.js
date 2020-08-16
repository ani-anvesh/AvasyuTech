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
  const scoreRed2 = localStorage.getItem("scorered2");
  const scoreOrange2 = localStorage.getItem("scoreorange2");
  const scoreGreen2 = localStorage.getItem("scoregreen2");
  const scores1 = parseInt(scoreRed2);
  const scores2 = parseInt(scoreOrange2);
  const scores3 = parseInt(scoreGreen2);
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
                    {userName}
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
              Score in Red Zone :{" "}
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
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "3vh",
              }}
            >
              Score in Green Zone:{" "}
              {data.scoreGreen2 ? data.scoreGreen2 : scores3 > 0 ? scores3 : 0}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12} calssName="grids2">
          <Paper elevation={5} className="score" style={{ padding: "0.7vh" }}>
            <img src={imgB} alt="Green Badge" />
            {/*  <XYPlot height={250} width={570}>
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                data={[
                  {
                    opacity: 0.8660760156594759,
                    x: 0,
                    y: 10,
                  },
                  {
                    opacity: 0.744693619393887,
                    x: 1,
                    y: 9.266417943963136,
                  },
                  {
                    opacity: 0.9652140178796553,
                    x: 2,
                    y: 9.776456307230758,
                  },
                  {
                    opacity: 0.711130876334882,
                    x: 3,
                    y: 11.430636091889387,
                  },
                  {
                    opacity: 0.8339686935138716,
                    x: 4,
                    y: 10.347080955481244,
                  },
                  {
                    opacity: 0.9324436761724086,
                    x: 5,
                    y: 11.329653264080745,
                  },
                  {
                    opacity: 0.7988838574289382,
                    x: 6,
                    y: 12.393774860804477,
                  },
                ]}
                style={{}}
              />
            </XYPlot> */}

            {/* <Button
              variant="outlined"
              color="secondary"
              style={{ padding: "1vh" }}
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
