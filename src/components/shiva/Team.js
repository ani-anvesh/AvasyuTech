import React from "react";
import "./style.css";
import img7 from "./img/k1.jpeg";
import img8 from "./img/sh.jpeg";
import img9 from "./img/ani.jpeg";
import img10 from "./img/v.jpeg";
import img11 from "./img/o.jpeg";
import img12 from "./img/am.jpeg";
import img13 from "./img/appa.jpeg";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Team() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Paper>
      <Grid container className={classes.root}>
        <Grid
          xs={12}
          item
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Typography
            variant="h3"
            align="center"
            style={{
              fontWeight: "bolder",
              letterSpacing: "1.2px",
              padding: "2.1vh",
            }}
          >
            OUR TEAM
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Typography
              variant="h3"
              align="center"
              style={{ padding: "1.2vh" }}
            >
              Director
            </Typography>
          </Grid>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="border"
          ></div>
          <Grid container justify="center">
            <Grid
              item
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <Paper elevation={7} className="Peps">
                <img src={img7} />
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsN"
                >
                  Dr.M.K.Kaushik
                </Typography>
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsE"
                >
                  kaushik_mk@vaagdevi.edu.in
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Typography
              noWrap
              variant="h3"
              align="center"
              style={{
                fontWeight: "bolder",
                letterSpacing: "1.2px",
                padding: "1.2vh",
              }}
            >
              Executives
            </Typography>
          </Grid>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="border"
          ></div>
          <Grid container justify="center">
            <Grid
              item
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <Paper elevation={7} className="Peps">
                <img src={img8} />
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsN"
                >
                  Shiva Ravula
                </Typography>
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsE"
                >
                  shivanayudu123@gmail.com
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <Paper elevation={7} className="Peps">
                <img src={img9} />
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsN"
                >
                  Anvesh Reddy
                </Typography>
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsE"
                >
                  postbox.me@gmail.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Typography
              noWrap
              variant="h3"
              align="center"
              style={{
                fontWeight: "bolder",
                letterSpacing: "1.2px",
                padding: "1.2vh",
              }}
            >
              Team Lead
            </Typography>
          </Grid>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="border"
          ></div>
          <Grid container justify="center">
            <Grid
              item
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <Paper elevation={7} className="Peps">
                <img src={img10} />
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsN"
                >
                  Vineeth Pulluru
                </Typography>
                <Typography
                  noWrap
                  variant="h5"
                  align="center"
                  style={{ fontWeight: "bolder", letterSpacing: "1.2px" }}
                  className="pepsE"
                >
                  virtualvineeth@gmail.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
