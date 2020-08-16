import React from "react";
import "./layout.css";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
  },
  rootes: {
    flexGrow: 1,
    maxHeight: "100%",
    color: "blue",
    margin: "5vh 2vh 1vh 0vh",
  },
}));

export default function Jobs() {
  const skills = [
    {
      Analysis: [
        "Data scientist",
        "Business analyst",
        "Quantitative analyst",
        "Quality Assurance Engineer",
        "Project coordinator",
        "System analyst",
        "Test analyst",
        "Reporting analyst",
        "Subject expert",
        "Marketing analyst",
        "Sales analyst",
        "Operations analyst",
        "Pre-sales consultant",
        "Actuary",
        "Budget estimator",
      ],
      CONTENTWRITING: [
        "Web content writer",
        "Freelancer",
        "Editor",
        "Creative writer",
        "Blogger",
        "Script writer",
        "Marketing content writer",
        "Digital content specialist",
        "Article writer",
        "Research paper writer",
        "Journalist",
        "Interviewer",
        "Copy writers",
        "Technical writers",
        "Social media writer",
        "E-mail writer",
        "Promo writer",
        "Script writer",
        "Long form content writer",
      ],
      ART: [
        "Design lecturer",
        "Illustrator ",
        "Art or web Curator",
        "Fashion designer ",
        "Makeup artist",
        "Photographer",
        "Graphic designer",
        "Animator",
        "Print maker",
        "Industrial designer",
        "Painter",
        "Food decorator(ex: cakes)",
        "Jewellery designer",
        "Furniture artist ",
        "Digital artist",
        "Art directors",
        "Stone/glass or other material designers",
        "Stamp designers",
        "Font designers",
        "Ceramic artist ",
        "Interior designer",
        "Architect",
      ],
      MARKETING: [
        "Marketing Specialist",
        "Social Media Manager",
        "Search Engine Optimization Specialist",
        "Email Marketing Manager",
        "Web Content Writer",
        "Web Producer",
        "Product Manager",
        "Marketing Analyst",
        "Advertising Coordinator",
        "Advertising Manager",
        "Public Relations Manager",
        "Brand Manager",
        "Media Buyer",
        "Chief Marketing Officer",
        "Digital Marketing Manager",
        "Digital Marketing Director",
        "eCommerce Manager",
        "Sales representative",
        "Content marketer",
        "Brand marketer",
        "Event marketing",
      ],
      ORGANIZING: [
        "Real estate",
        "Merchandiser",
        "Wedding planner",
        "Travel agent",
        "Event manager",
        "Archivist",
        "Construction superintendent",
        "Museum manager",
        "Administrator",
        "Library specialist",
        "Technician",
        "Accountant",
        "Virtual assistant",
      ],
      COLLABORATION: [
        "Human Resource",
        "Consultant",
        "Project manager",
        "Market research",
        "Information technology",
        "Athlete or sports person",
        "Costumer service workers",
      ],
      COMMUNICATION: [
        "Psychologists",
        "Therapists",
        "Doctors",
        "Lawyers",
        "Training/development specialists",
        "Counsellors",
        "Teachers",
        "Medical workers",
        "Financial advisors",
        "Human service assistants",
        "Social workers",
        "Marketing/research analysts ",
        "Human resources",
        "Child care",
        "Editors",
        "Journalist",
        "Reporters",
        "Receptionist",
        "Office manager",
        "Personal assistant",
        "Fitness trainer/coach",
      ],
      LEADERSHIP: [
        "Principals",
        "HR managers",
        "Coach",
        "Construction managers",
        "Chief executive",
        "Judge",
        "Recruiter",
        "Project managers",
        "Lawyer",
        "Restaurant manager",
        "Sales",
        "Entreprenuer",
      ],
    },
  ];
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        xs={12}
        className={classes.rootes}
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          {skills.map((skill, index) => (
            <Paper elevation={5} className="paps">
              <Typography variant="h4" align="center">
                {skill}
              </Typography>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </div>
  );
}
