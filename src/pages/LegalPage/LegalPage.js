/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames"; // nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import signupPageStyle from "assets/jss/material-kit-react/views/signupPageStyle.js"; //Change to Contact

import image from "../../assets/livinglaniersunset.jpg";

const useStyles = makeStyles(signupPageStyle);

export default function LegalPage(props) {

React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
});

const classes = useStyles();
const { ...rest } = props;

return (
    <div>
        <Header
            absolute
            color="transparent"
            brand="Lanier Life Group"
            links={<HeaderLinks dropdownHoverColor="info" />}
            {...rest}
        />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Legal Stuff Goes Here</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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
        </div>
    );
}