import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import contactsStyle from "../../../assets/jss/material-kit-react/views/sectionsSections/contactsStyle.js";

// import city from "assets/img/examples/city.jpg";
import keys from "../../../utilities/config/keys";

const useStyles = makeStyles(contactsStyle);

    const RegularMap = withScriptjs(
        withGoogleMap(() => (
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{ lat: 34.2714819, lng: -83.9135733 - 0.025 }} //34.2714819,-83.9135733
                defaultOptions={{ scrollwheel: true, zoomControl: true,
                    styles: [
                        {
                            featureType: "administrative.land_parcel",
                            stylers: [{ "visibility": "off" }]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "poi.business",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.arterial",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#e2e2ec" }, { visibility: "simplified" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels",
                            "stylers": [{ "color": "#f0fdff" }, { visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text",
                            "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        }
                    ]
                    [
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "poi.business",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.arterial",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{ "color": "#e2e2ec" },{ visibility: "simplified" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels",
                            "stylers": [{ "color": "#f0fdff" },{ visibility: "off" }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text",
                            "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [{ visibility: "off" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text",
                            "stylers": [{ visibility: "off" }]
                        }
                    ]
                }}>

                <Marker position={{ lat: -83.9135733, lng: 34.2714819 }} />
            </GoogleMap>
        ))
    );

    export default function SectionContacts({ ...rest }) {

        const [checked, setChecked] = React.useState([]);
        const handleToggle = value => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        }

        const classes = useStyles();

        return (
            <div className="cd-section" {...rest}>
                <div className={classes.contacts2}>
                    <div className={classes.map}>
                        <RegularMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsAPIKey}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={ <div style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>

                    <GridItem xs={12} sm={6} md={6}>
    <Card className={classes.card2}>
    <form>
    <CardHeader contact color="rose" className={classes.textCenter}>
    <h4 className={classes.cardTitle}>Contact Us</h4>
    </CardHeader>
    <CardBody>
    <GridContainer>
    <GridItem xs={12} sm={6} md={6}>
    <InfoArea
    className={classes.infoArea2}
    title="Give us a ring"
    description={
    <span>
    Michael Jordan
    <br /> +40 762 321 762
    <br /> Mon - Fri, 8:00-22:00
    </span>
    }
    icon={Phone}
    iconColor="rose"
    />
    </GridItem>
    <GridItem xs={12} sm={6} md={6}>
    <InfoArea
    className={classes.infoArea2}
    title="Find us at the office"
    description={
    <span>
    Bld Mihail Kogalniceanu, nr. 8,
    <br /> 7652 Bucharest,
    <br /> Romania
    </span>
    }
    icon={PinDrop}
    iconColor="rose"
    />
    </GridItem>
    </GridContainer>
    <GridContainer>
    <GridItem xs={12} sm={6} md={6}>
    <CustomInput
    labelText="Full Name"
    id="first2"
    formControlProps={{
    fullWidth: true
    }}
    />
    </GridItem>
    <GridItem xs={12} sm={6} md={6}>
    <CustomInput
    labelText="Email Address"
    id="email-address2"
    formControlProps={{
    fullWidth: true
    }}
    />
    </GridItem>
    </GridContainer>
    <CustomInput
    labelText="Your Message"
    id="message2"
    formControlProps={{
    fullWidth: true
    }}
    inputProps={{
    multiline: true,
    rows: 5
    }}
    />
    </CardBody>
    <CardFooter className={classes.justifyContentBetween}>
    <FormControlLabel
    control={
    <Checkbox
    tabIndex={-1}
    onClick={() => handleToggle(2)}
    checkedIcon={<Check className={classes.checkedIcon} />}
    icon={<Check className={classes.uncheckedIcon} />}
    classes={{
    checked: classes.checked,
    root: classes.checkRoot
    }}
    />
    }
    classes={{ label: classes.label }}
    label="I'm not a robot"
    />
    <Button color="rose" className={classes.pullRight}>
    Send Message
    </Button>
    </CardFooter>
    </form>
    </Card>
    </GridItem>
    </div>
    {/* Contact us 2 END */}
    </div>
    );
    }