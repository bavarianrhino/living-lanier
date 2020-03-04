/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";

// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
// import SectionDescription from "./Sections/SectionDescription.js";
import SectionTeam from "./Sections/SectionTeam.js";
// import SectionServices from "Sections/SectionServices.js";
// import SectionOffice from "Sections/SectionOffice.js";
// import SectionContact from "Sections/SectionContact.js";

import aboutUsStyle from "../../assets/jss/material-kit-react/views/aboutUsStyle.js";

const dashboardRoutes = [];

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                brand="Lanier Life Group"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{ height: 400, color: "white" }}
                {...rest}
            />
            
            <Parallax filter="dark" small image={require("assets/livinglaniersunset.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={7} lg={7}>
                            <h1 className={classes.title}>About Us</h1>
                            <h4>Meet the amazing team behind this project and find out more about how we work.</h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    {/* <SectionDescription /> */}
                    <SectionTeam />
                </div>
            </div>

            <Footer content={
                <div>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <Link className={classes.block} to="/about" >About Us</Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link className={classes.block} to="/contact" >Contact</Link>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <Link className={classes.block} to="/legal" >Legal</Link>
                            </ListItem>
                        </List>
                    </div>
                
                    <div className={classes.right}>&copy; {1900 + new Date().getYear()}, made by{" "}
                        <a href="https://www.ryanriesenberger.com/" className={classes.inlineBlock} target="_blank" > Ryan Riesenberger.</a>
                    </div>
                </div>
            }/>

        </div>
    );
}