import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import "./layout.css";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../../config/auth";
import Jobs from "./Jobs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

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
    margin: "3vh auto 1vh auto",
  },
}));

export default function Package() {
  const [skill, setSkill] = useState(0);
  const skills = {
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
    Aptitude: [
      "IT jobs",
      "Management & Business related jobs",
      "Banking jobs",
      "Jobs in railways",
      "Jobs in Defence sector",
      "SSC (Staff Selection Commission) jobs",
      "Groups & Civil Service jobs",
    ],
  };

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.rootes}>
      <AuthContext.Consumer>
        {(context) => (
          <>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Typography
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  variant="h4"
                  align="center"
                  style={{
                    color: "#0099FF",
                    letterSpacing: "2.1px",
                    fontWeight: "bolder",
                    margin: "1.8vh",
                  }}
                >
                  Our{" "}
                  <b style={{ fontSize: "3.6vh", color: "#000000" }}>
                    {" "}
                    Packages
                  </b>
                </Typography>
              </Grid>
            </Grid>
            <AppBar
              elevation={0}
              position="static"
              style={{
                backgroundColor: "#FFFFFF",
              }}
              className="appBar"
            >
              <Tabs
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab
                  style={{ color: "#000000", fontWeight: "bolder" }}
                  label="Package One"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ color: "#000000", fontWeight: "bolder" }}
                  label="Package Two"
                  {...a11yProps(1)}
                />
                <Tab
                  style={{ color: "#000000", fontWeight: "bolder" }}
                  label="Package Three"
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid
                  container
                  className={classes.rootes}
                  justify="space-evenly"
                  alignItems="center"
                  id="root"
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    style={{
                      padding: "0vh 3vh",
                    }}
                  >
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Typography
                          variant="h4"
                          align="center"
                          style={{
                            color: "#0099FF",
                            letterSpacing: "1.2px",
                            fontWeight: "bolder",
                            marginBottom: "2.7vh",
                          }}
                        >
                          Job opportunities in AGREPADH...!
                        </Typography>
                        {Object.values(skills)[8].map((skille, indexe) => (
                          <Paper elevation={5} className="paps papJ">
                            <Typography variant="h6" align="center">
                              {skille}
                            </Typography>
                          </Paper>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Paper elevation={7} className="pap paps">
                          <div className="conter">
                            <h2>01</h2>
                            <Typography className="pack" variant="h5">
                              Agrepadh
                            </Typography>
                            <h1>Self-guage your skills on</h1>
                            <ul>
                              <li>Aptitude</li>
                              <li>Logical</li>
                              <li>&</li>
                              <li>English</li>
                            </ul>
                            {context.userId !== null ? (
                              <Link
                                to={{
                                  pathname: "/instructions",
                                  state: "package1",
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "5vh auto -3vh auto",
                                    display: "flex",
                                    zIndex: 3,
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            ) : (
                              <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "5vh auto -3vh auto",
                                    zIndex: 3,
                                    display: "flex",
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            )}
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.rootes}
                  justify="space-evenly"
                  alignItems="center"
                  id="root"
                >
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={3}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Typography
                          variant="h4"
                          align="center"
                          style={{
                            letterSpacing: "2.1px",
                            fontWeight: "bolder",
                            marginBottom: "1.8vh",
                          }}
                        >
                          SKILLS
                        </Typography>
                        <Typography
                          variant="h6"
                          align="center"
                          style={{
                            color: "#000000",
                            letterSpacing: "1.2px",
                            fontWeight: "bolder",
                            margin: "1.8vh",
                          }}
                        >
                          Select a Skill below...!
                        </Typography>
                        {Object.keys(skills).map((skill, index) => (
                          <Paper
                            onClick={() => setSkill(index)}
                            elevation={5}
                            className="paps papS"
                          >
                            <Typography variant="h6" align="center">
                              {skill}
                            </Typography>
                          </Paper>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={5}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Typography
                          variant="h5"
                          align="center"
                          style={{
                            color: "#0099FF",
                            letterSpacing: "1.2px",
                            fontWeight: "bolder",
                            margin: "2.7vh",
                          }}
                        >
                          Job opportunities for the Selected Skill...!
                        </Typography>
                        <Paper
                          className="papJO"
                          variant="outlined"
                          elevation={0}
                        >
                          {Object.values(skills)[skill].map(
                            (skille, indexe) => (
                              <Paper elevation={5} className="paps papJ">
                                <Typography variant="h6" align="center">
                                  {skille}
                                </Typography>
                              </Paper>
                            )
                          )}
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Paper elevation={12} className="pap1 paps">
                          <div className="conter">
                            <h2>02</h2>
                            <Typography className="pack" variant="h5">
                              Abyadhan
                            </Typography>
                            <h1>Self Assess your potential in</h1>
                            <ul>
                              <li>Leadership</li>
                              <li>Communication</li>
                              <li>Collaboration</li>
                              <li>Organizing</li>
                              <li>Marketing</li>
                              <li>&</li>
                              <li>Content</li>
                            </ul>
                            {context.userId !== null ? (
                              <Link
                                to={{
                                  pathname: "/instructions",
                                  state: "package3",
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "1vh auto -3vh auto",
                                    zIndex: 3,
                                    display: "flex",
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            ) : (
                              <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "1vh auto -3vh auto",
                                    display: "flex",
                                    zIndex: 3,
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            )}
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Grid
                  container
                  className={classes.rootes}
                  justify="space-evenly"
                  alignItems="center"
                  id="root"
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    style={{
                      padding: "0vh 3vh",
                    }}
                  >
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Typography
                          variant="h4"
                          align="center"
                          style={{
                            color: "#0099FF",
                            letterSpacing: "1.2px",
                            fontWeight: "bolder",
                            marginBottom: "2.7vh",
                          }}
                        >
                          Job opportunities in ADHVAN...!
                        </Typography>
                        {Object.values(skills)[8].map((skille, indexe) => (
                          <Paper elevation={5} className="paps papJ">
                            <Typography variant="h6" align="center">
                              {skille}
                            </Typography>
                          </Paper>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Grid container justify="space-evenly" alignItems="center">
                      <Grid item>
                        <Paper elevation={7} className="pap paps">
                          <div className="conter">
                            <h2>03</h2>
                            <Typography className="pack" variant="h5">
                              Adhvan
                            </Typography>
                            <h1>Self-guage your skills on</h1>
                            <ul>
                              <li>Logical</li>
                              <li>&</li>
                              <li>Coding</li>
                            </ul>
                            {context.userId !== null ? (
                              <Link
                                to={{
                                  pathname: "/instructions",
                                  state: "package2",
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "9vh auto -4vh auto",
                                    zIndex: 3,
                                    display: "flex",
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            ) : (
                              <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{
                                    margin: "9vh auto -4vh auto",
                                    zIndex: 3,
                                    display: "flex",
                                  }}
                                >
                                  Lets Go
                                </Button>
                              </Link>
                            )}
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </>
        )}
      </AuthContext.Consumer>
    </div>
  );
}
