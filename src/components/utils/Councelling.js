import React, { useCallback, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withRouter } from "react-router";
import base from "../../config/FbConfig";
import "firebase/firestore";
import { AuthContext } from "../../config/auth";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Councelling() {
  const { userId } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const [ques, setState] = useState({
    reason: "",
    category: "",
  });

  const updateField = (e) => {
    e.preventDefault();
    setState({
      ...ques,
      [e.target.name]: e.target.value,
    });
  };
  const db = base.firestore();
  const handleData = (event) => {
    event.preventDefault();
    return db
      .collection("UserData")
      .doc(userId)
      .set(
        {
          Category: ques.category,
          Reason: ques.reason,
        },
        { merge: true }
      )
      .then(function () {
        alert(
          "Thanks for approching us, our team will contact you with in 25 hrs"
        );
      })

      .catch(function (error) {
        //alert("Error writing document: ", error);
      });
  };
  //  console.log(ques);

  return (
    <Container maxWidth="md" style={{ padding: "3vh" }}>
      <Paper style={{ padding: "2vh" }}>
        <form validate onSubmit={() => handleData()} id="myForm">
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Category :
          </Typography>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="category"
              value={ques.category}
              onChange={updateField}
              label="category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Career Guidance"}>Career Guidance</MenuItem>
              <MenuItem value={"Singing"}>Singing</MenuItem>
              <MenuItem value={"Dancing"}>Dancing</MenuItem>
              <MenuItem value={"Artist"}>Artist</MenuItem>
              <MenuItem value={"Digital Safety"}>Digital Safety</MenuItem>
              <MenuItem value={"Communication"}>Communication</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Reason
          </Typography>
          <TextField
            id="outlined-textarea"
            fullWidth
            name="reason"
            label="Reason"
            placeholder="Enter Reason Here"
            multiline
            value={ques.reason}
            onChange={updateField}
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => history.push("/")}
          >
            Add Question
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
