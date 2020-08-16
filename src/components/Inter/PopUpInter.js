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

export default function PopUpInter(props) {
  const [open, setOpen] = React.useState(false);
  //console.log(props.zone);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const scoreIn1 = localStorage.getItem("scoreIn1");
  const score1 = parseInt(scoreIn1);
  const { userId } = useContext(AuthContext);

  const [local, setLocal] = useState({
    Inter1:
      parseInt(localStorage.getItem("scoreIn1")) > 0
        ? parseInt(localStorage.getItem("scoreIn1"))
        : 0,
  });
  const db = base.firestore();
  const handleScoreFire = () => {
    db.collection("UserDataInter")
      .doc(userId)
      .set(
        {
          scoreIn1: local.Inter1,
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
          {score1 < 15 ? (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Hello There...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h5"
                  style={{ margin: "5vh" }}
                >
                  Seems like you are not intrested in Engineering, so we are
                  taking you to some specific set of questions which suits you.
                  Answer to get Certificate of Exploration from our side.
                </Typography>
              </DialogContent>
            </>
          ) : (
            <>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant="h4" align="center">
                  Hello There...!
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Typography
                  gutterBottom
                  align="center"
                  variant="h4"
                  style={{ margin: "5vh" }}
                >
                  Seems like you are intrested in Engineering, so we are taking
                  you to some specific set of questions which suits you. Answer
                  to get Certificate of Exploration from our side.
                </Typography>
              </DialogContent>
            </>
          )}
        </>
        <DialogActions>
          <Link
            to={{
              pathname: "/questionsIn/:id",
              state: [score1],
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
        </DialogActions>
      </Dialog>
    </div>
  );
}
