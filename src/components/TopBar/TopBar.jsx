import { AppBar, Toolbar, Box, Link, Button, SvgIcon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ReactComponent as telegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as twitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as githubIcon } from "../../assets/icons/github.svg";
import Header from "./Header.jsx";
// import ThemeSwitcher from "./ThemeSwitch.jsx";
import SiteLogo from "../../assets/icons/logo.png";
import ConnectMenu from "./ConnectMenu.jsx";
import "./topbar.scss";

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      padding: "10px",
    },
    justifyContent: "flex-end",
    alignItems: "flex-end",
    background: "#0000008f",
    boxShadow: "0px 5px 15px 1px rgb(0 0 0 / 16%)",
    backdropFilter: "none",
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("981")]: {
      display: "none",
    },
  },
}));

function TopBar({ theme, toggleTheme, handleDrawerToggle }) {
  const classes = useStyles();
  const isVerySmallScreen = useMediaQuery("(max-width: 730px)");

  return (
    <AppBar position="sticky" className={classes.appBar} elevation={0}>
      <Toolbar disableGutters className="dapp-topbar">
        {/* <Button
          id="hamburger"
          aria-label="open drawer"
          edge="start"
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <SvgIcon component={MenuIcon} />
        </Button> */}
        <Link href="https://cyberverse.money/" className="logo-section">
          <img src={SiteLogo} height="50px" width= "50px" style={{ marginTop: "7px" }}/>
          {!isVerySmallScreen &&<Typography variant="h4" color="textSecondary" className="logo-text">
            CYBERVERSE
          </Typography>
          }
          <Typography variant="h6" color="textSecondary" className="logo-text2">
            Home
          </Typography>
        </Link>

        <Box display="flex" alignItems="center" style={{marginTop: '5px'}}>
          {!isVerySmallScreen &&  
            <div>
              <Button variant="contained" href="http://t.me/cyberverseofficial" target="_blank" className="socail-links">
                <SvgIcon component={telegramIcon} fill="#fff"/>
              </Button>
              <Button variant="contained" href="https://twitter.com/cyberverseCBV" target="_blank" className="socail-links">
                <SvgIcon component={twitterIcon} />
              </Button>
              <Button variant="contained" href="http://instagram.com/cyberverseofficial" target="_blank" className="socail-links">
                <SvgIcon component={instagramIcon} viewBox="0 0 30 30"/>
              </Button>
              <Button variant="contained" href="http://github.com/CyberVerse2022" target="_blank" className="socail-links">
                <SvgIcon component={githubIcon}/>
              </Button>
            </div>
          }
          {isVerySmallScreen && <Header />}
          <ConnectMenu theme={theme} />

          {/* <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
