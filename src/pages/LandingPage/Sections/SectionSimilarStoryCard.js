import React from "react";
import { connect} from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import Info from "../../../components/Typography/Info.js";
import Success from "../../../components/Typography/Success.js";
import Danger from "../../../components/Typography/Danger.js";

import blog6 from "../../../assets/img/examples/blog6.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg";
import blog7 from "../../../assets/img/examples/blog7.jpg";

import sectionSimilarStoriesStyle from "../../../assets/jss/material-kit-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

const SectionSimilarStoryCard = (props) => {
 
    const classes = useStyles()

    // mapThreeRecentProps = (state) => {
        // top3Residences
    // }
    console.log(props.top3Residences)
    console.log(top3Residences)

    return (
        <Card blog>
            <CardHeader image>
                <a href="#pablo"><img src={blog6} alt="..." /></a>
                <div className={classes.coloredShadow} style={{ backgroundImage: "url(" + blog6 + ")", opacity: "1" }} />
            </CardHeader>
            <CardBody>
                <Info><h6>ENTERPRISE</h6></Info>
                <h4 className={classes.cardTitle}><a href="#pablo">Autodesk looks to future of 3D printing with ProjectEscher</a></h4>
                <p className={classes.description}>
                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. <a href="#pablo"> Read More </a>
                </p>
            </CardBody>
        </Card>

    )
}
    
    const mapStateToProps = (state) => {
        return { 
            top3Residences: state.residences.residenceListingsById
        }
        // return { top3Residences: state.residences.residenceListingsById.slice(0,3)}
    }
    
    const mapDispatchToProps = (dispatch) => ({
        functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(SectionSimilarStoryCard);