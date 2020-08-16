import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { Paper, Hidden } from "@material-ui/core";
const Services = () => {
  return (
    <>
      <div className="vi-servicesmain">
        <Hidden mdDown>
          <div className="vi-bb1">
            <img src={require("../images/bg27.png")} />
          </div>
        </Hidden>

        <div className="vi-grid00">
          <div className="vi-grid001">
            <h3>OUR SERVICES</h3>
            <br></br>
            <h2>
              AVASYU provides you the services to give you the best outcome of
              your talent. Your answers to a basic quiz will analyze your innate
              capabilities. We provide the best mentors to inbuilt the superior
              knowledge of your talent's domain. We also give you job
              opportunities in the VIBA and its association companies.
            </h2>
          </div>
        </div>

        <div className="vi-gridmain120">
          <div className="vi-grid11">
            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid111"
            >
              <img src={require("../images/100.png")} />
              <div className="gap1">
                <h1>Innate Potential</h1>
                <br></br>
                <h3>
                  The great heights can be achieved with the hidden talent
                  inside you. You are the only who knows yourself. So bring out
                  your special skills and succeed in your passionate path.
                </h3>
              </div>
            </Paper>

            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid112"
            >
              <img src={require("../images/2000.png")} />
              <div className="gap1">
                <h1>Mock Test</h1>
                <br></br>
                <h3>
                  Practice always makes everyone reach their goal. Such an
                  opportunity is Mock Test. Here we provide you Mock Tests to
                  improve you in your favorite domain and help you to reach your
                  achievements in a easy path.
                </h3>
              </div>
            </Paper>
          </div>

          <div className="vi-grid12">
            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid121"
            >
              <img src={require("../images/3000.png")} />
              <div className="gap">
                <h1>Remote Learning</h1>
                <br></br>
                <h3>
                  Traditional learning is braked in this generation due to many
                  reasons like lockdown. We promote Remote Learning by which
                  everything is learnt in a simpler way through live sessions or
                  virtual teaching.
                </h3>
              </div>
            </Paper>

            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid122"
            >
              <img src={require("../images/4000.png")} />
              <div className="gap">
                <h1>Students Internships</h1>
                <br></br>
                <h3>
                  The talent of a student in the resume nowadays is seen by the
                  number of internships done. Here we give you a platform to do
                  internships in your talent pace of skill through well trained
                  professionals.
                </h3>
              </div>
            </Paper>
          </div>

          <div className="vi-grid13">
            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid131"
            >
              <img src={require("../images/5000.png")} />
              <div className="gap">
                <h1>24 / 7 support</h1>
                <br></br>
                <h3>
                  Our team is student friendly to make you get out of your fears
                  and take you to the final step of the fruits of success by
                  assisting you round the clock to clear your queries.
                </h3>
              </div>
            </Paper>

            <Paper
              elevation={5}
              style={{ borderRadius: "16px" }}
              className="bro vi-grid132"
            >
              <img src={require("../images/6000.png")} />
              <div className="gap">
                <h1>Mentorship</h1>
                <br></br>
                <h3>
                  Mentor is one who comes to your help and guides you in the
                  chosen domain. AVASYU has the best mentor panel onboard and
                  offer their avail at all times whenever required
                </h3>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
