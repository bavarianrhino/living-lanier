import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames"; // nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Favorite from "@material-ui/icons/Favorite";
import Satellite from "@material-ui/icons/Satellite";
import Map from "@material-ui/icons/Map";
import ViewList from "@material-ui/icons/ViewList";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";


import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import NavPills from "components/NavPills/NavPills.js";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPageStyle.js";
// import logoPic from "../../assets/logo.png";

// Sections for this page
import MapContainer from "./Sections/MapContainer.js";
import MapContainer2 from "./Sections/MapContainer2.js";
// import dark from "@material-ui/core/styles/createPalette";

const dashboardRoutes = [];

const useStyles = makeStyles(landingPageStyle);

export default function ListingsPage(props) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                color="white"
                brand="Lanier Life Group"
                links={<HeaderLinks dropdownHoverColor="info" />}
                absolute
                changeColorOnScroll={{ height: 10, color: "white" }}
                {...rest}
            />

            <Parallax filter="dark" image={require("assets/livinglaniersunset.jpg")} style={{ height: '20vh' }} >
                <div className={classes.container} style={{ margin: '-80px 100px 0px 100px', maxWidth: '100% !important' }} >
                    <GridContainer>
                        {/* <GridItem xs={12} sm={12} md={6} lg={6}>
                            <h1 className={classes.title}>Water Front Homes on Lake Lanier.</h1>
                            <h4>Are you looking for water front property but seem to always find homes that aren’t really on the lake?
                                 With a life long knowledge of Lake Lanier, our passion is to provide you with nothing less than water 
                                 in your backyard. Simple as that.</h4>
                            <br />
                            <Link to="/listings">
                                <Button type='button' color="danger" size="lg" >
                                    See Listings
                                </Button>
                            </Link>
                        </GridItem> */}
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container} style={{ paddingLeft: '5px', paddingTop: '10px', maxWidth: '100%' }} >
                    <NavPills style={{ paddingTop: '5px', borderRadius: '10px', minWidth: '75px' }} color="danger" tabs={[
                        {
                            tabButton: "Map",
                            tabContent: (
                                <MapContainer2 />
                            )
                        },
                        {
                            tabButton: "Map2",
                            tabContent: (
                                <MapContainer />
                            )
                        },
                        {
                            tabButton: "List",
                            tabContent: (
                                <MapContainer2 />
                            )
                        }
                    ]} />

                    {/* <CustomTabs headerColor="primary" 
                        tabs={[
                            {
                                tabName: "Map",
                                tabIcon: Map, 
                                tabContent: ( <MapContainer2 /> )
                            },
                            {
                                tabName: "List",
                                tabIcon: List, 
                                tabContent: ( <MapContainer2 /> )
                            }
                        ]}
                    /> */}
                    {/* <MapContainer2 /> */}
                    
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
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Container, Header, Image } from 'semantic-ui-react';
// class Search extends Component {
// 	render() {
// 		return (
//             <div>
//                 <Container text style={{ marginTop: '7em' }}>
//                     <Header as='h1'>Semantic UI React Fixed Template</Header>
//                     <p>This is a basic fixed menu template using fixed size containers.</p>
//                 </Container>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return { attr: state.attr }
// }
// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Search);