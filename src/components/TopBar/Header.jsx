import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as MenuIcon } from "../../assets/icons/hamburger.svg";
import { SvgIcon, Link, Box, Popper, Fade, Button } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="landing-header">
            <div className="landing-header-nav-wrap">
                <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                    <Button className="landing-header-nav-text">
                        <SvgIcon color="primary" component={MenuIcon} />
                    </Button>
                    <Popper className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://t.me/cyberverseofficial" target="_blank">
                                        <SvgIcon color="primary" component={Telegram} />
                                        <p>Telegram</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/cyberverseCBV" target="_blank">
                                        <SvgIcon color="primary" component={Twitter} />
                                        <p>Twitter</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://medium.com/cyberverseofficial" target="_blank">
                                        <SvgIcon color="primary" component={Instagram} viewBox="0 0 30 30"/>
                                        <p>Instagram</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://github.com/CyberVerse2022" target="_blank">
                                        <SvgIcon color="primary" component={GitHub} />
                                        <p>GitHub</p>
                                    </Link>
                                </div>
                            </Fade>
                        )}
                    </Popper>
                </Box>
            </div>
        </div>
    );
}

export default Header;
