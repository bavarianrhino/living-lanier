/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import House from '@material-ui/icons/House';
import Landscape from '@material-ui/icons/Landscape';
import MoreVert from '@material-ui/icons/MoreVert';
import ExploreIcon from '@material-ui/icons/Explore';
import Pool from '@material-ui/icons/Pool';
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import People from "@material-ui/icons/People";
import Telegram from '@material-ui/icons/Telegram';
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
// import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
            t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
        var isMobile = navigator.userAgent.match(
            /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
        );
        if (isMobile) {
            // if we are on mobile device the scroll into view will be managed by the browser
        } else {
            e.preventDefault();
            var targetScroll = document.getElementById(target);
            scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
        }
    }
};
    const scrollGo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function() {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };

    var onClickSections = {};

    const { dropdownHoverColor } = props;
    const classes = useStyles();

    return (
        <List className={classes.list + " " + classes.mlAuto}>

    
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    navDropdown
                    // color={window.innerWidth < 960 ? "info" : "white"}
                    hoverColor={dropdownHoverColor}
                    buttonText="Listings"
                    buttonProps={{ className: classes.navLink, color: "transparent", fontSize: "large" }}
                    buttonIcon={ViewCarousel}
                    dropdownList={[
                        <Link to="/listings" className={classes.dropdownLink}>
                            <House className={classes.dropdownIcons} /> Residence
                        </Link>,
                        <Link to="/listings" className={classes.dropdownLink}>
                            <Landscape className={classes.dropdownIcons} /> Property
                        </Link>
                    ]}
                />
            </ListItem>

            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor={dropdownHoverColor}
                    buttonText="More"
                    buttonProps={{ className: classes.navLink, color: "transparent" }}
                    buttonIcon={ExploreIcon}
                    dropdownList={[
                        <Link to="/about" className={classes.dropdownLink}>
                            <People className={classes.dropdownIcons} /> About Us
                        </Link>,
                        <Link to="/contact" className={classes.dropdownLink}>
                            <Telegram className={classes.dropdownIcons} /> Contact
                        </Link>,
                        <a href="http://lanier.uslakes.info/Level.asp" target="_blank" className={classes.dropdownLink} >
                            <Pool className={classes.dropdownIcons} /> Water Level
                        </a>,
                        <Link to="/legal" className={classes.dropdownLink}>
                            <AccountBalance className={classes.dropdownIcons} /> Legal
                        </Link>
                    ]}
                />
            </ListItem>

        </List>
    );
}

HeaderLinks.defaultProps = {
    hoverColor: "primary"
};

HeaderLinks.propTypes = {
    dropdownHoverColor: PropTypes.oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};