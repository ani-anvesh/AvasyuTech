import React, { useState, useContext } from "react";
import base from "../../config/FbConfig";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../../config/auth";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PopUp(props) {
  const [open, setOpen] = React.useState(false);
  //console.log(props.zone);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const scoreRed1 = localStorage.getItem("scorered1");
  const scoreOrange1 = localStorage.getItem("scoreorange1");
  const score1 = parseInt(scoreRed1);
  const score2 = parseInt(scoreOrange1);
  const { userId } = useContext(AuthContext);

  const [local, setLocal] = useState({
    red1:
      parseInt(localStorage.getItem("scorered1")) > 0
        ? parseInt(localStorage.getItem("scorered1"))
        : 0,
    orange1:
      parseInt(localStorage.getItem("scoreorange1")) > 0
        ? parseInt(localStorage.getItem("scoreorange1"))
        : 0,
  });
  const db = base.firestore();
  const handleScoreFire = () => {
    db.collection("UserData")
      .doc(userId)
      .set(
        {
          scoreRed1: local.red1,
          scoreOrange1: local.orange1,
          scoreGreen1: "no",
        },
        { merge: true }
      )
      .then(function () {
        //alert("Document successfully written!");
      })
      .catch(function (error) {
        //alert("Error writing document: ", error);
      });
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: "3vh" }}
        onClick={handleClickOpen}
      >
        Submit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <>
          {props.zone == "orange" && score1 <= 7 ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Oh Sorry...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h5"
                  style={{ margin: "5vh" }}
                >
                  Hey...! Sorry for the low score your score in Red Zone is :{" "}
                  {score1} but no worries you got a chance to enter next level
                </Typography>
              </DialogContent>
            </>
          ) : props.zone == "orange" && score1 > 7 ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Congratulations...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "5vh" }}
                >
                  Well Done that's a Good One, your score in Red Zone is :{" "}
                  {score1}, Now you are selected to the Next Level...!
                </Typography>
              </DialogContent>
            </>
          ) : props.zone == "orange" ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Sorry...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "5vh" }}
                >
                  Your Score is Zero but try better in next Zone
                </Typography>
              </DialogContent>
            </>
          ) : null}
          {props.zone == "green" && score2 <= 7 ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Oh Sorry...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "3vh" }}
                >
                  Hey...! Sorry for the low score, your score in Orange Zone is :{" "}
                  {score2} but no worries you have a Badge from us for your
                  time.
                </Typography>
              </DialogContent>
            </>
          ) : props.zone == "green" && score2 > 7 ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Congratulations...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "3vh" }}
                >
                  Well Done that's a Good one too, your score in Orange Zone is :{" "}
                  {score2}, Now your over all agregate in two zones are
                  calculated, and if it is over 70% you are selcted to the next
                  level
                </Typography>
              </DialogContent>
            </>
          ) : props.zone == "green" ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Sorry...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "5vh" }}
                >
                  Sorry ...! Your Score is Zero, due to low Score you are not
                  promoted to the next level, you owned a Badge from our Side
                </Typography>
              </DialogContent>
            </>
          ) : null}
        </>
        <DialogActions>
          {props.zone == "orange" ? (
            <Link
              to={{
                pathname: "/questions/:id",
                state: [
                  props.collection[0],
                  props.collection[1],
                  props.collection[2],
                  "orange",
                ],
              }}
              style={{ textDecoration: "none" }}
            >
              <Button autoFocus onClick={handleClose} color="primary">
                Lets Go
              </Button>
            </Link>
          ) : props.zone == "green" ? (
            <Link
              to={{
                pathname: "/questions/:id",
                state: [
                  props.collection[0],
                  props.collection[1],
                  props.collection[2],
                  "green",
                ],
              }}
              style={{ textDecoration: "none" }}
            >
              <Button
                autoFocus
                onClick={(handleClose, handleScoreFire)}
                color="primary"
              >
                Lets Go
              </Button>
            </Link>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
}
