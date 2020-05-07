import React, { useState } from "react";
// react components used to create a google map

import { useSelector } from "react-redux"
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";

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
import Info from "../../../components/Typography/Info.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";

import tabsStyle from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import contactsStyle from "../../../assets/jss/material-kit-react/views/sectionsSections/contactsStyle.js";

import keys from "../../../utilities/config/keys";

const useStyles = makeStyles(contactsStyle);

export default function SectionContacts({ ...rest }) {

    // console.log(residences)
    const classes = useStyles();
    
    
    // const RegularMap = withScriptjs(withGoogleMap(() => (
        function Map() {
            const residences = useSelector(state => state.residences.residenceListingsByID)
            const [selectedResidence, setSelectedResidence] = useState(null)
            return (
                <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: 34.26512, lng: -84.068269 }}>

            {residences.map((residence) => (
                <Marker 
                key={residence.listingId}
                position={{ lat: residence.cardData.coords[1], lng: residence.cardData.coords[0] }}
                onClick={() => {
                    setSelectedResidence(residence)
                    }}
                    // onMouseOver={() => {
                        // setSelectedResidence(residence)
                    // }}
                    />
                    ))}

            {selectedResidence && (
                <InfoWindow
                position={{ lat: selectedResidence.cardData.coords[1], lng: selectedResidence.cardData.coords[0] }}
                onCloseClick={() => {
                    setSelectedResidence(null)
                    }}
                    // onMouseOut={() => {
                        // setSelectedResidence(null)
                    // }}
                    >
                    <Card blog>
                        <CardHeader image>
                            <a href="#pablo"><img src={!!selectedResidence.cardData.media ? selectedResidence.cardData.media[0].MediaURL : "https://heartlandltd.com/photo/default_thumb.jpeg"} alt="..." /></a>
                            <div className={classes.coloredShadow} style={{ backgroundImage: "url(" + (!!selectedResidence.cardData.media ? selectedResidence.cardData.media[0].MediaURL : "https://heartlandltd.com/photo/default_thumb.jpeg") + ")", opacity: "1" }} />
                        </CardHeader>
                        <CardBody>
                            <Info><h6>price: {selectedResidence.cardData.price}</h6></Info>
                            <Info><h6>listPrice: {selectedResidence.cardData.listPrice}</h6></Info>
                            <Info><h6>originalListPrice: {selectedResidence.cardData.originalListPrice}</h6></Info>
                            <h4 className={classes.cardTitle}></h4>
                            <h4 className={classes.cardTitle}>totalBathrooms: {selectedResidence.cardData.totalBathrooms}</h4>
                            <h4 className={classes.cardTitle}>fullLowerBathrooms: {selectedResidence.cardData.fullLowerBathrooms}</h4>
                            <h4 className={classes.cardTitle}>halfLowerBathrooms: {selectedResidence.cardData.halfLowerBathrooms}</h4>
                            <h4 className={classes.cardTitle}>fullUpperBathrooms: {selectedResidence.cardData.fullUpperBathrooms}</h4>
                            <h4 className={classes.cardTitle}>halfUpperBathrooms: {selectedResidence.cardData.halfUpperBathrooms}</h4>
                            <h4 className={classes.cardTitle}>lowerBedrooms: {selectedResidence.cardData.lowerBedrooms}</h4>
                            <h4 className={classes.cardTitle}>upperBedrooms: {selectedResidence.cardData.upperBedrooms}</h4>
                            <h4 className={classes.cardTitle}>daysOnMarket: {selectedResidence.cardData.daysOnMarket}</h4>
                            <h4 className={classes.cardTitle}>propertyType: {selectedResidence.cardData.propertyType}</h4>
                            <p className={classes.description}>bioText: {selectedResidence.cardData.bioText}</p>
                            <p className={classes.description}>photoCount: {selectedResidence.cardData.photoCount}</p>
                            <p className={classes.description}>mediaURL: {selectedResidence.cardData.mediaURL}</p>
                        </CardBody>
                    </Card>
                {/* <div>
                    <img style={{ width: '25%' }} src={!!selectedResidence.cardData.media ? selectedResidence.cardData.media[0].MediaURL : "https://heartlandltd.com/photo/default_thumb.jpeg"}/>
                    <p>price: {selectedResidence.cardData.price}</p>
                    <p>listPrice: {selectedResidence.cardData.listPrice}</p>
                    <p>originalListPrice: {selectedResidence.cardData.originalListPrice}</p>
                    <p>totalBathrooms: {selectedResidence.cardData.totalBathrooms}</p>
                    <p>fullLowerBathrooms: {selectedResidence.cardData.fullLowerBathrooms}</p>
                    <p>halfLowerBathrooms: {selectedResidence.cardData.halfLowerBathrooms}</p>
                    <p>fullUpperBathrooms: {selectedResidence.cardData.fullUpperBathrooms}</p>
                    <p>halfUpperBathrooms: {selectedResidence.cardData.halfUpperBathrooms}</p>
                    <p>lowerBedrooms: {selectedResidence.cardData.lowerBedrooms}</p>
                    <p>upperBedrooms: {selectedResidence.cardData.upperBedrooms}</p>
                    <p>daysOnMarket: {selectedResidence.cardData.daysOnMarket}</p>
                    <p>propertyType: {selectedResidence.cardData.propertyType}</p>
                    <p>bioText: {selectedResidence.cardData.bioText}</p>
                    <p>photoCount: {selectedResidence.cardData.photoCount}</p>
                    <p>mediaURL: {selectedResidence.cardData.mediaURL}</p>
                </div> */}
                </InfoWindow>
            )}
        </GoogleMap>
    )
    // )))
}


const RegularMap = withScriptjs(withGoogleMap(Map))

return (
    <div className="cd-section" {...rest}>
            <div className={classes.contacts2}>
                <div id='map' style={{ height: '100%', margin: '0', padding: '0' }} className={classes.map}>

                    <RegularMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.REACT_APP_API_GOOGLE_MAPS_API_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={ <div style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                </div>
            </div>
        </div>
    )
}

    // const RegularMap = withScriptjs(withGoogleMap(() => (
    //         <GoogleMap defaultZoom={11}
    //                     defaultCenter={{ lat: 34.26512, lng: -84.068269 }}
    //                     defaultOptions={{ scrollwheel: true, zoomControl: true,
    //                     styles: [{
    //                         featureType: "administrative.land_parcel",
    //                         stylers: [{ "visibility": "off" }]
    //                     },{
    //                         "featureType": "administrative.neighborhood",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "poi",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "poi.business",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road",
    //                         "elementType": "labels",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.arterial",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.highway",
    //                         "elementType": "labels",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "geometry",
    //                         "stylers": [{ "color": "#e2e2ec" }, { visibility: "simplified" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "labels",
    //                         "stylers": [{ "color": "#f0fdff" }, { visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
    //                     },{
    //                         "featureType": "transit",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "water",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ visibility: "off" }]
    //                     }
    //                 ]
    //                 [
    //                     {
    //                         "featureType": "administrative.land_parcel",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "administrative.neighborhood",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "poi",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "poi.business",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road",
    //                         "elementType": "labels",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road",
    //                         "elementType": "labels.icon",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.arterial",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.highway",
    //                         "elementType": "labels",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "geometry",
    //                         "stylers": [{ "color": "#e2e2ec" },{ visibility: "simplified" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "labels",
    //                         "stylers": [{ "color": "#f0fdff" },{ visibility: "off" }]
    //                     },{
    //                         "featureType": "road.local",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ "color": "#7e8586" },{ visibility: "simplified" }]
    //                     },{
    //                         "featureType": "transit",
    //                         "stylers": [{ visibility: "off" }]
    //                     },{
    //                         "featureType": "water",
    //                         "elementType": "labels.text",
    //                         "stylers": [{ visibility: "off" }]
    //                     }]
    //                 }}>

    //             <Marker position={{ lat: -83.9135733, lng: 34.2714819 }} />
    //         </GoogleMap>
    //     ))
    // );

    // export default function MapContainer2({ ...rest }) {

    //     const classes = useStyles();

    //     return (
    //         <div className="cd-section" {...rest}>
    //             <div className={classes.contacts2}>
    //                 <div id='map' style={{ height: '100%', margin: '0', padding: '0' }} className={classes.map}>

    //                     <RegularMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_MAPS_API_KEY}`}
    //                         loadingElement={<div style={{ height: `100%` }} />}
    //                         containerElement={ <div style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }} />}
    //                         mapElement={<div style={{ height: `100%` }} />}
    //                     />

    //                 </div>

    //                 <GridItem xs={11} sm={4} md={4}>

    //                     <Card className={classes.card2}>
    //                         <form>

    //                             <CardHeader contact color="danger" className={classes.textLeft}>
    //                                 <h4 className={classes.cardTitle}>WHEN HOVERED OVER, DATA SHOWS BELOW</h4>
    //                             </CardHeader>

    //                             <CardBody>
    //                                 <GridContainer>
    //                                     <GridItem xs={12} sm={12} md={12}>
    //                                         <InfoArea className={classes.infoArea2} title="Organize data here!" description={ <span> Data goes here </span> } icon={PinDrop} iconColor="danger" />
    //                                     </GridItem>
                                        
    //                                 </GridContainer>
    //                                 <GridContainer>

    //                                 </GridContainer> 
    //                             </CardBody>

    //                             <CardFooter className={classes.justifyContentBetween}>
    //                                 <InfoArea className={classes.infoArea2} title="Organize data here!" description={ <span> Data goes here </span> } icon={PinDrop} iconColor="danger" />
    //                             </CardFooter>

    //                         </form>
    //                     </Card>

    //                 </GridItem>
    //             </div>
    //         </div>
    //     );
    // }