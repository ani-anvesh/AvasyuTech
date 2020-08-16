import React, { useCallback, useState } from "react";
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

const QuesPor = ({ history }) => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const ani = document.querySelector("#myForm");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const [ques, setState] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
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
    const {
      category,
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
    } = event.target.elements;

    return db
      .collection("QuestionTypes")
      .doc(category.value)
      .collection("Questions")
      .add({
        question: question.value,
        options: [option1.value, option2.value, option3.value, option4.value],
        answer: answer.value,
      })
      .then(() => {
        alert("Question Added to database, please refresh the browser");
      })
      .then()
      .catch((error) => {
        //console.error("Error adding document: ", error);
      });
  };
  //console.log(ques);

  return (
    <Container maxWidth="md" style={{ padding: "3vh" }}>
      <Paper style={{ padding: "2vh" }}>
        <form onSubmit={handleData} validate id="myForm">
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
              value={category}
              onChange={handleChange}
              label="category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Aptitude"}>Aptitude</MenuItem>
              <MenuItem value={"Communication"}>Communication</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Logical"}>Logical</MenuItem>
              <MenuItem value={"Organization"}>Organization</MenuItem>
              <MenuItem value={"Collaboration"}>Collaboration</MenuItem>
              <MenuItem value={"Content"}>Content</MenuItem>
              <MenuItem value={"Analysis"}>Analysis</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"LeaderShip"}>Leadership</MenuItem>
              <MenuItem value={"C-lanuage"}>C-lanuage</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Question :
          </Typography>
          <TextField
            id="outlined-textarea"
            fullWidth
            name="question"
            label="Question"
            placeholder="enter question here"
            multiline
            value={ques.question}
            onChange={updateField}
            variant="outlined"
          />
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Options :
          </Typography>
          <TextField
            style={{ marginTop: "1vh" }}
            id="standard-textarea"
            fullWidth
            name="option1"
            label="Option 1"
            placeholder="enter Option here"
            multiline
            value={ques.option1}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="option2"
            label="Option 2"
            placeholder="enter Option here"
            multiline
            value={ques.option2}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="option3"
            label="Option 3"
            placeholder="enter Option here"
            multiline
            value={ques.option3}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="option4"
            label="Option 4"
            placeholder="enter Option here"
            multiline
            value={ques.option4}
            onChange={updateField}
            variant="outlined"
          />
          <Typography variant="h6" style={{ margin: "2vh" }}>
            Answer :
          </Typography>
          <TextField
            style={{ marginTop: "0vh" }}
            id="standard-textarea"
            fullWidth
            name="answer"
            label="Answer"
            placeholder="enter Answer here"
            multiline
            value={ques.answer}
            onChange={updateField}
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Question
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
export default withRouter(QuesPor);
