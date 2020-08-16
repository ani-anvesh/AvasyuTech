import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Home.css";
import check from "./check.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import BubbleChartRoundedIcon from "@material-ui/icons/BubbleChartRounded";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MeetingRoomRoundedIcon from "@material-ui/icons/MeetingRoomRounded";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { AuthContext } from "../config/auth";
import base from "../config/FbConfig";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavBar(props) {
  const { userId, userName } = useContext(AuthContext);
  const history = useHistory();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="navBars">
        <img src={check} />
        <Typography
          variant="h6"
          style={{ fontWeight: "bolder", margin: "0.5vh" }}
        >
          Hello...!
        </Typography>
        <Typography
          noWrap
          variant="h5"
          style={{
            fontWeight: "bolder",
            margin: "0.9vh",
            color: "#0099FF",
            maxWidth: "100%",
            letterSpacing: "1.2px",
          }}
        >
          {userName}
        </Typography>
      </div>
      <Divider style={{ margin: "0vh 0.9vh" }} />
      <List className="navBars">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem className="navBars">
            <li onClick={() => setMobileOpen(!mobileOpen)}>
              <HomeRoundedIcon />
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
              >
                Home
              </Typography>
            </li>
          </ListItem>
        </Link>
        <div
          style={{
            height: "0.25vh",
            width: "79%",
            backgroundColor: "lightgrey",
          }}
        ></div>
        <Link to="/services" style={{ textDecoration: "none" }}>
          <ListItem className="navBars">
            <li onClick={() => setMobileOpen(!mobileOpen)}>
              <BubbleChartRoundedIcon />
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
              >
                Our Services
              </Typography>
            </li>
          </ListItem>
        </Link>
        <Link to="/mentors2" style={{ textDecoration: "none" }}>
          <ListItem className="navBars">
            <li onClick={() => setMobileOpen(!mobileOpen)}>
              <SupervisedUserCircleRoundedIcon />
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
              >
                Mentors
              </Typography>
            </li>
          </ListItem>
        </Link>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <ListItem className="navBars">
            <li onClick={() => setMobileOpen(!mobileOpen)}>
              <PeopleOutlineRoundedIcon />
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
              >
                Team
              </Typography>
            </li>
          </ListItem>
        </Link>
        <div
          style={{
            height: "0.25vh",
            width: "79%",
            backgroundColor: "lightgrey",
          }}
        ></div>
        {userId == null ? (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <ListItem className="navBars">
                <li onClick={() => setMobileOpen(!mobileOpen)}>
                  <HowToRegRoundedIcon />
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
                  >
                    Sign In
                  </Typography>
                </li>
              </ListItem>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <ListItem className="navBars">
                <li onClick={() => setMobileOpen(!mobileOpen)}>
                  <ExitToAppRoundedIcon />
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
                  >
                    Sign Up
                  </Typography>
                </li>
              </ListItem>
            </Link>
          </>
        ) : (
          <ListItem className="navBars">
            <li
              onClick={() => {
                setMobileOpen(!mobileOpen);
                base.auth().signOut();
                history.push("/");
              }}
            >
              <MeetingRoomRoundedIcon />
              <Typography
                variant="h6"
                style={{ fontWeight: "bolder", marginTop: "0.9vh" }}
              >
                Log Out
              </Typography>
            </li>
          </ListItem>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar style={{}}>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              align="center"
              style={{
                color: "#0099FF",
                fontWeight: "bolder",
                letterSpacing: "1.2px",
              }}
            >
              {userName}
            </Typography>
          </Link>
          <div className="icon navBar">
            <Hidden smDown implementation="css">
              <>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                    <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                      Home
                    </Typography>
                  </li>
                </Link>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <li>
                    <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                      Our Services
                    </Typography>
                  </li>
                </Link>
                <Link to="/mentors2" style={{ textDecoration: "none" }}>
                  <li>
                    <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                      Mentors
                    </Typography>
                  </li>
                </Link>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <li>
                    <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                      Team
                    </Typography>
                  </li>
                </Link>
              </>
            </Hidden>

            <AuthContext.Consumer>
              {(context) =>
                context.userId == null ? (
                  <Hidden smDown implementation="css">
                    <div style={{ display: "flex" }}>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{ margin: "auto 3vh " }}
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/register" style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{ margin: "auto 3vh" }}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  </Hidden>
                ) : (
                  <>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="primary"
                      style={{ padding: "auto", margin: "auto 3vh" }}
                    >
                      <AccountCircle />
                    </IconButton>

                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                      </Link>
                      <MenuItem
                        onClick={() => {
                          base.auth().signOut();
                          handleClose();
                          history.push("/");
                        }}
                      >
                        LogOut
                      </MenuItem>
                    </Menu>
                  </>
                )
              }
            </AuthContext.Consumer>
          </div>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        <Hidden mdDown implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
