import React, { useEffect, useState, useContext } from "react";
import { Grid, Typography, Paper, Button, Divider } from "@material-ui/core";
import base from "../../config/FbConfig";
import { AuthContext } from "../../config/auth";
import "./profile.css";
import img from "./pro.jpg";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";
export const AuthUser = React.createContext();

export default function Profile() {
  const [data, setData] = useState([]);
  const { userId, userName } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const score3 = localStorage.getItem("scoreAnu");
  const score1 = (parseFloat(score3) / 30) * 100;
  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("UserData")
      .doc(userId)
      .onSnapshot(function (doc) {
        const newData = doc.data();
        setData(newData);
        setLoading(false);
      });
    return () => unsubscribe();
  }, []);
  //console.log(Object.values(data));
  return loading ? (
    <Loader />
  ) : (
    <Grid container xs={12}>
      <Grid item xs={12} className="proGid">
        <Paper elevation={7} className="proPap">
          <img src={img} alt="profile" className="shake-vertical" />
          <Typography variant="h5" align="center" noWrap className="protype">
            First Name :<b> {data.firstName}</b>
          </Typography>
          <Typography variant="h5" align="center" noWrap className="protype">
            Last Name :<b> {data.lastName}</b>
          </Typography>
          <Typography variant="h5" align="center" noWrap className="protype">
            Mobile :<b> {data.mobile}</b>
          </Typography>
          <Typography variant="h5" align="center" noWrap className="protype">
            Email :<b> {data.email}</b>
          </Typography>
          <Typography variant="h5" align="center" noWrap className="protype">
            Organization :<b> {data.college}</b>
          </Typography>
          <Typography variant="h5" align="center" noWrap className="protype">
            State :<b> {data.state}</b>
          </Typography>
          <Divider />
          {data.scoreAnu ? (
            <Paper
              className="proGid"
              elevation={7}
              style={{ margin: "3vh 1.6vh", padding: "1.6vh" }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Your Anugrahak Score :
              </Typography>

              <Typography
                variant="h4"
                align="center"
                style={{
                  color: "#0099ff",
                  fontWeight: "bold",
                  marginTop: "1.2vh",
                }}
              >
                You have{" "}
                {score1 >= (22.5 / 30) * 100 &&
                (data.scoreAnu / 30) * 100 >= (22.5 / 30) * 100 ? (
                  <Typography
                    variant="h4"
                    align="center"
                    style={{
                      color: "Green",
                      fontWeight: "bold",
                    }}
                  >
                    Passed
                  </Typography>
                ) : score1 >= (22.5 / 30) * 100 ||
                  (data.scoreAnu / 30) * 100 >= (22.5 / 30) * 100 ? (
                  <Typography
                    variant="h4"
                    align="center"
                    style={{
                      color: "Green",
                      fontWeight: "bold",
                    }}
                  >
                    Passed
                  </Typography>
                ) : (
                  <Typography
                    variant="h4"
                    align="center"
                    style={{
                      color: "Red",
                      fontWeight: "bold",
                    }}
                  >
                    Failed
                  </Typography>
                )}
                and overall level card of Anugrahak :
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "3vh",
                }}
              >
                Your level in Anugrahak Test is :
                {data.scoreAnu
                  ? (data.scoreAnu / 30) * 100
                  : score1 > 0
                  ? score1
                  : 0}{" "}
                %
              </Typography>
            </Paper>
          ) : (
            <Paper
              className="proGid"
              elevation={7}
              style={{
                margin: "3vh 1.6vh",
                padding: "1.6vh",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Start Attempting Anugrahak test :
              </Typography>
              <Link
                to={{
                  pathname: "/questionAnu/:id",
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" color="primary">
                  Lets Go
                </Button>
              </Link>
            </Paper>
          )}
          <Divider />
          {data.scoreRed1 ? (
            <Paper
              className="proGid"
              elevation={7}
              style={{ margin: "3vh 1.6vh", padding: "1.6vh" }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Your Agrepadh Score :
              </Typography>
              <Typography variant="h6" align="center" className="protype">
                Score in Aptitude(Red Zone) : <b>{data.scoreRed1}</b>
              </Typography>
              <Typography variant="h6" align="center" className="protype">
                Score in English & Logic(Orange Zone) :{" "}
                <b>{data.scoreOrange1}</b>
              </Typography>
              <Typography variant="h6" align="center" className="protype">
                Score in Aptitude, English & Logic(Green Zone) :{" "}
                {data.scoreGreen1 != "no" ? (
                  <b>{data.scoreGreen1}</b>
                ) : (
                  <Typography variant="h6" align="center" className="protype">
                    <b>
                      You are not Qualified to Green Zone, feel free to attempt
                      the exam once again
                    </b>
                  </Typography>
                )}
              </Typography>
            </Paper>
          ) : (
            <Paper
              className="proGid"
              elevation={7}
              style={{ margin: "3vh 1.6vh", padding: "1.6vh" }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Start Attempting Agrepadh Exam :
              </Typography>
              <Link
                to={{
                  pathname: "/questions/:id",
                  state: ["Aptitude", "Logical", "English"],
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" color="primary">
                  Lets Go
                </Button>
              </Link>
            </Paper>
          )}
          <Divider />
          {data.scoreRed2 ? (
            <Paper
              className="proGid"
              elevation={7}
              style={{ margin: "3vh 1.6vh", padding: "1.6vh" }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Your Adhvan Score :
              </Typography>
              <Typography variant="h6" align="center" className="protype">
                Score in Logic(Red Zone) : <b>{data.scoreRed2}</b>
              </Typography>
              <Typography variant="h6" align="center" className="protype">
                Score in Coding(Orange Zone) : <b>{data.scoreOrange2}</b>
              </Typography>
              <Typography variant="h5" align="center" className="protype">
                Score in Logic & Coding(Green Zone) :{" "}
                {data.scoreGreen2 != "no" ? (
                  <b>{data.scoreGreen2}</b>
                ) : (
                  <Typography variant="h6" align="center" className="protype">
                    <b>
                      You are not Qualified to Green Zone, feel free to attempt
                      the exam once again...
                    </b>
                  </Typography>
                )}
              </Typography>
            </Paper>
          ) : (
            <Paper
              className="proGid"
              elevation={7}
              style={{
                margin: "3vh 1.6vh",
                padding: "1.6vh",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                className="protype"
                style={{
                  color: "#FF6600",
                  fontWeight: "bolder",
                  letterSpacing: "1.2px",
                }}
              >
                Start Attempting Adhvan Exam :
              </Typography>
              <Link
                to={{
                  pathname: "/question/:id",
                  state: ["Logical", "C-lanuage"],
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" color="primary">
                  Lets Go
                </Button>
              </Link>
            </Paper>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
