import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router";
import base from "../../config/FbConfig";
import Paper from "@material-ui/core/Paper";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ padding: "1vh" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#" style={{ textDecoration: "none" }}>
        AVASYU
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = ({ history }) => {
  const classes = useStyles();
  const [data, setState] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    college: "",
    state: "",
  });

  const updateField = (e) => {
    e.preventDefault();
    setState({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        userName,
        firstName,
        lastName,
        email,
        mobile,
        password,
        college,
        state,
      } = event.target.elements;
      const db = base.firestore();
      var users = null;
      // console.log(firstName + lastName + email + mobile + password);
      try {
        await base
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((cred) => {
            users = cred.user;
            users.sendEmailVerification();
            users.updateProfile({
              displayName: userName.value,
            });
          })
          .then((cred) => {
            return db
              .collection("UserDataInter")
              .doc(users.uid)
              .set({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                mobile: mobile.value,
                college: college.value,
                state: state.value,
              })
              .then(() => {
                alert(
                  `Hey ${
                    firstName.value + " " + lastName.value
                  } ...! You are now a part of AVASYU`
                );
              });
          });
        history.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
    [history]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        style={{
          borderRadius: "16px",
          padding: "0vh 5vh",
          marginBottom: "3vh",
        }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSignUp} validate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="uName"
                  value={data.userName}
                  name="userName"
                  onChange={updateField}
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  value={data.firstName}
                  name="firstName"
                  onChange={updateField}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={data.lastName}
                  name="lastName"
                  onChange={updateField}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={data.email}
                  name="email"
                  onChange={updateField}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  value={data.mobile}
                  name="mobile"
                  onChange={updateField}
                  type="mobile"
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="college"
                  label="College/Oraganization/School"
                  value={data.college}
                  name="college"
                  onChange={updateField}
                  type="college"
                  autoComplete="college"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  value={data.state}
                  name="state"
                  onChange={updateField}
                  type="state"
                  autoComplete="state"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Paper>
    </Container>
  );
};

export default withRouter(Signup);
