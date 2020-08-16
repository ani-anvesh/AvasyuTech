import React from "react";
import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../package1/questions.css";
import img1 from "./imgs/analysis.jpg";
import img2 from "./imgs/collaboration.jpg";
import img3 from "./imgs/communication.jpg";
import img4 from "./imgs/content.jpg";
import img5 from "./imgs/leadership.jpg";
import img6 from "./imgs/Organization.jpg";

export default function Pack3() {
  const pack = [
    "Analysis",
    "Collaboration",
    "Communication",
    "Content",
    "LeaderShip",
    "Organization",
  ];
 // console.log(pack);
  return (
    <div>
      <Grid container xs={12} md={12} className="pack3">
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "Analysis",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img1} />
              <Typography variant="h4" align="center" className="text3">
                Analysis
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "Collaboration",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img2} />
              <Typography variant="h4" align="center" className="text3">
                Collaboration
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "Communication",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img3} />
              <Typography variant="h4" align="center" className="text3">
                Communication
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "Content",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img4} />
              <Typography variant="h4" align="center" className="text3">
                Content
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "LeaderShip",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img5} />
              <Typography variant="h4" align="center" className="text3">
                Leadership
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            to={{
              pathname: "/question3/:id",
              state: "Organization",
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              elevation={7}
              className="pap3"
              style={{ borderRadius: "16px" }}
            >
              <img src={img6} />
              <Typography variant="h4" align="center" className="text3">
                Organization
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
