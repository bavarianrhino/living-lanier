import React from "react";
// react components used to create a google map
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";

import tabsStyle from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import contactsStyle from "../../../assets/jss/material-kit-react/views/sectionsSections/contactsStyle.js";

// const useStyles = makeStyles(tabsStyle);

// export default function SectionTabs() {
//   const classes = useStyles();
  
//               <CustomTabs
//                 headerColor="primary"
//                 tabs={[
//                   {
//                     tabName: "Profile",
//                     tabIcon: Face,
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. So when you get something that has
//                         the name Kanye West on it, it’s supposed to be pushing
//                         the furthest possibilities. I will be the leader of a
//                         company that ends up being worth billions of dollars,
//                         because I got the answers. I understand culture. I am
//                         the nucleus.
//                       </p>
//                     )
//                   },
//                   {
//                     tabName: "Messages",
//                     tabIcon: Chat,
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. I will be the leader of a company
//                         that ends up being worth billions of dollars, because I
//                         got the answers. I understand culture. I am the nucleus.
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at.
//                       </p>
//                     )
//                   },
//                   {
//                     tabName: "Settings",
//                     tabIcon: Build,
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. So when you get something that has
//                         the name Kanye West on it, it’s supposed to be pushing
//                         the furthest possibilities. I will be the leader of a
//                         company that ends up being worth billions of dollars,
//                         because I got the answers. I understand culture. I am
//                         the nucleus.
//                       </p>
//                     )
//                   }
//                 ]}
//               />
//             </GridItem>
//             <GridItem xs={12} sm={6} md={6}>
//               <h3>
//                 <small>Tabs on Plain Card</small>
//               </h3>
//               <CustomTabs
//                 plainTabs
//                 headerColor="danger"
//                 tabs={[
//                   {
//                     tabName: "Home",
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. So when you get something that has
//                         the name Kanye West on it, it’s supposed to be pushing
//                         the furthest possibilities. I will be the leader of a
//                         company that ends up being worth billions of dollars,
//                         because I got the answers. I understand culture. I am
//                         the nucleus.
//                       </p>
//                     )
//                   },
//                   {
//                     tabName: "Updates",
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. I will be the leader of a company
//                         that ends up being worth billions of dollars, because I
//                         got the answers. I understand culture. I am the nucleus.
//                         I think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at.
//                       </p>
//                     )
//                   },
//                   {
//                     tabName: "History",
//                     tabContent: (
//                       <p className={classes.textCenter}>
//                         think that’s a responsibility that I have, to push
//                         possibilities, to show people, this is the level that
//                         things could be at. So when you get something that has
//                         the name Kanye West on it, it’s supposed to be pushing
//                         the furthest possibilities. I will be the leader of a
//                         company that ends up being worth billions of dollars,
//                         because I got the answers. I understand culture. I am
//                         the nucleus.
//                       </p>
//                     )
//                   }
//                 ]}
//               />
//             </GridItem>
//           </GridContainer>
//         </div>
//       </div>
//     </div>
//   );
// }
// import city from "assets/img/examples/city.jpg";
import keys from "../../../utilities/config/keys";

const useStyles = makeStyles(contactsStyle);

    const RegularMap = withScriptjs(withGoogleMap(() => (
            <GoogleMap defaultZoom={11}
                        defaultCenter={{ lat: 34.26512, lng: -84.068269 }}
                        defaultOptions={{ scrollwheel: true, zoomControl: true,
                        styles: [{
                            featureType: "administrative.land_parcel",
                            stylers: [{ "visibility": "off" }]
                        },{
                            "featureType": "administrative.neighborhood",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "poi.business",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.arterial",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#e2e2ec" }, { visibility: "simplified" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "labels",
                            "stylers": [{ "color": "#f0fdff" }, { visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "labels.text",
                            "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
                        },{
                            "featureType": "transit",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "water",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        }
                    ]
                    [
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "administrative.neighborhood",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "poi.business",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.arterial",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#e2e2ec" },{ visibility: "simplified" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "labels",
                            "stylers": [{ "color": "#f0fdff" },{ visibility: "off" }]
                        },{
                            "featureType": "road.local",
                            "elementType": "labels.text",
                            "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
                        },{
                            "featureType": "transit",
                            "stylers": [{ visibility: "off" }]
                        },{
                            "featureType": "water",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        }]
                    }}>

                <Marker position={{ lat: -83.9135733, lng: 34.2714819 }} />
            </GoogleMap>
        ))
    );

    export default function SectionContacts({ ...rest }) {

        // const [checked, setChecked] = React.useState([]);
        // const handleToggle = value => {
        //     const currentIndex = checked.indexOf(value);
        //     const newChecked = [...checked];

        //     if (currentIndex === -1) {
        //         newChecked.push(value);
        //     } else {
        //         newChecked.splice(currentIndex, 1);
        //     }

        //     setChecked(newChecked);
        // }

        const classes = useStyles();

        return (
            <div className="cd-section" {...rest}>
                <div className={classes.contacts2}>
                    <div id='map' style={{ height: '100%', margin: '0', padding: '0' }} className={classes.map}>

                        <RegularMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsAPIKey}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={ <div style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />

                    </div>

                    <GridItem xs={11} sm={4} md={4}>

                        <Card className={classes.card2}>
                            <form>

                                <CardHeader contact color="danger" className={classes.textLeft}>
                                    <h4 className={classes.cardTitle}>WHEN HOVERED OVER, DATA SHOWS BELOW</h4>
                                </CardHeader>

                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <InfoArea className={classes.infoArea2} title="Organize data here!" description={ <span> Data goes here </span> } icon={PinDrop} iconColor="danger" />
                                        </GridItem>
                                        
                                    </GridContainer>
                                    <GridContainer>

                                    </GridContainer> 
                                </CardBody>

                                <CardFooter className={classes.justifyContentBetween}>
                                    <InfoArea className={classes.infoArea2} title="Organize data here!" description={ <span> Data goes here </span> } icon={PinDrop} iconColor="danger" />
                                </CardFooter>

                            </form>
                        </Card>

                    </GridItem>
                </div>
            </div>
        );
    }

    // <GridItem xs={12} sm={6} md={6}>
    {/* </GridItem> */}
//     <GridItem xs={12} sm={6} md={6}> 
//     <CustomInput labelText="Full Name" id="first2" formControlProps={{ fullWidth: true }} />
// </GridItem>
// <GridItem xs={12} sm={6} md={6}>
//     <CustomInput labelText="Email Address" id="email-address2" formControlProps={{ fullWidth: true }} />
// </GridItem>
// <CustomInput labelText="Your Message" id="message2" formControlProps={{ fullWidth: true }} inputProps={{ multiline: true, rows: 5 }} />