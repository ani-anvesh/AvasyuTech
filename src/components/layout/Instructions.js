import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./layout.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import img from "./imges/inst.png";

export default function Instructions(props) {
  const id = props.location.state;
  //console.log(props);
  const package1 = [
    "As a whole, the self-assessment tests drop in 3 packages with filtering stages in each package namely red, orange and green zones.",
    "Each zone comprises of 15 questions carrying 5 Marks for each question.",
    "Initially, anyone who opts to self-gauge themselves have to take test in red zone.",
    "In Package-1, you will be tested in following areas:",
    "✓ Red zone test - Aptitude.",
    "✓ Orange zone test - Logical reasoning & English.",
    "✓ Green zone test - Aptitude, Logical reasoning & English.",
    "Red and orange zone tests have 20 questions each and all candidates are allowed to take both tests.",
    "There is NO time limit and NO negative marking in red and orange zone tests.",
    "Candidates who score an aggregate of 70% and above in both red and orange zone tests will be allowed to take green zone test.",
    "The green zone test also has 15 questions with a time limit of 40 minutes.",
    "All the candidates who take red and orange zone tests will be provided with a 'CERTIFICATE OF EXPLORATION'.",
    "The candidates who score 70% and above aggregate and attend green zone test are given a 'EPISTLE OF MERIT ACCREDITATION'.",
    "Top 20 best scorers in green zone test will be provided an internship opportunity in AVASYUs partnered companies.",
    "No certification is provided for candidates who take only red zone test.",
  ];
  const package2 = [
    "As a whole, the self-assessment tests drop in 3 packages with filtering stages in each package namely red, orange and green zones.",
    "Each zone comprises of 15 questions carrying 5 Marks for each question.",
    "Initially, anyone who opts to self-gauge themselves have to take test in red zone.",
    "In Package-2, you will be tested in following areas:",
    "✓ Red zone test - Logical reasoning",
    "✓ Orange zone test - Coding.",
    "✓ Green zone test - Logical reasoning & Coding.",
    "Red and orange zone tests have 20 questions each and all candidates are allowed to take both tests.",
    "There is NO time limit and NO negative marking in red and orange zone tests.",
    "Candidates who score an aggregate of 70% and above in both red and orange zone tests will be allowed to take green zone test.",
    "The green zone test also has 15 questions with a time limit of 40 minutes.",
    "All the candidates who take red and orange zone tests will be provided with a 'CERTIFICATE OF EXPLORATION'.",
    "The candidates who score 70% and above aggregate and attend green zone test are given a 'EPISTLE OF MERIT ACCREDITATION'.",
    "Top 20 best scorers in green zone test will be provided an internship oppo",
    "No certification is provided for candidates who take only red zone test.",
  ];
  const package3 = [
    " Package-3 has no zone classification and the test will be at a one go. It comprises of questions that tests the essential skills like:",
    "Each zone comprises of 15 questions carrying 5 Marks for each question.",
    "✓ Leadership",
    "✓ Collaboration",
    "✓ Analysis",
    "✓ Content writing",
    "✓ Communication",
    "✓ Organisation",
    "There is NO time limit",
    "The green zone test also has 15 questions with a time limit of 40 minutes.",
    "Package-3 test best scorers will be given a 'CERTIFICATE OF EXPLORATION' and will be offered guidance by our expert fraternity.",
    "The internship offered for Package-1 and Package-2 will be completely fulfilling the criteria of campus placements, government jobs, entrepreneurial regard, business aspects etc...",
  ];
  return (
    <Grid container xs={12} md={12} className="instGrid">
      <Grid
        item
        xs={6}
        md={6}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            style={{
              margin: "3vh auto 1vh auto ",
              display: "flex",
            }}
          >
            Go Back to Home
          </Button>
        </Link>
      </Grid>
      <Grid
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        item
        xs={6}
        md={6}
      >
        {id == "package1" ? (
          <Link
            to={{
              pathname: "/questions/:id",
              state: ["Aptitude", "Logical", "English"],
            }}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color="primary"
              style={{
                margin: "3vh auto 1vh auto",
                display: "flex",
              }}
            >
              Lets Go
            </Button>
          </Link>
        ) : id == "package2" ? (
          <Link
            to={{
              pathname: "/question/:id",
              state: ["Logical", "C-lanuage"],
            }}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color="primary"
              style={{
                margin: "3vh auto 1vh auto",
                display: "flex",
              }}
            >
              Lets Go
            </Button>
          </Link>
        ) : id == "package3" ? (
          <Link to="/pack3/skills" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{
                margin: "3vh auto 3vh auto",
                display: "flex",
              }}
            >
              Lets Go
            </Button>
          </Link>
        ) : (
          "none"
        )}
      </Grid>
      <Grid
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        item
        xs={12}
        md={6}
      >
        <Paper elevation={7} className="instPap">
          <Typography variant="h4" className="typer1">
            Instructions to be Noted
          </Typography>

          {id == "package1"
            ? package1.map((inst) => (
                <Typography varient="h6" className="typer">
                  {inst}
                </Typography>
              ))
            : id == "package3"
            ? package3.map((instr) => (
                <Typography varient="h6" className="typer">
                  {instr}
                </Typography>
              ))
            : id == "package2"
            ? package2.map((instru) => (
                <Typography varient="h6" className="typer">
                  {instru}
                </Typography>
              ))
            : "none"}
        </Paper>
      </Grid>
      <Grid
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        item
        xs={12}
        md={6}
        className="instr2"
      >
        <img src={img} alt="Instructions" />
      </Grid>
    </Grid>
  );
}
