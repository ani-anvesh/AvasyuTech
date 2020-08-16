import React, { useCallback, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import base from "../../config/FbConfig";
import { AuthContext } from "../../config/auth";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ padding: "1vh" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Avasyu
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
  margin: {
    marginTop: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ history, component: RouteComponent, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await base
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(() => {
            alert("Hey User...! Welcome back, glad you are here");
          });
        history.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
    [history]
  );
  const handleReset = useCallback(
    async (event) => {
      event.preventDefault();

      const { email } = event.target.elements;
      try {
        await base.auth().sendPasswordResetEmail(email.value).history.push("/");
        // Email sent.
      } catch (error) {
        alert(error.message);
      }
    },
    [history]
  );

  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        style={{
          borderRadius: "16px",
          padding: "0vh 5vh",
          marginBottom: "3vh",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} validate onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address / Mobile"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="password"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container xs={12} md={12} style={{ textAlign: "center" }}>
              <Grid item md={12} xs={12}>
                <Link onClick={handleReset} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid md={12} xs={12}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <li style={{ listStyle: "none" }}>
                    Don't have an account? Sign Up
                  </li>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Paper>
    </Container>
  );
};
export default withRouter(Login);
