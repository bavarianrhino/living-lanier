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

// class SectionSimilarStories extends React.Component {
const SectionSimilarStories = (props) => {
    const classes = useStyles();

    // useEffect((props) => {
        // console.log(props.top3Residences)
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    //   });
    
    // const mapThreeRecentProps = () => {
        // return top3Residences.map((res) => {
            // return <Card key={res.slice(0)} res={res} />
        // });
    // }
        
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>

                    <GridItem md={12}>
                        <h2 className={classes.title + " " + classes.textCenter}> Newest Listings</h2><br />

                        <GridContainer>
                            <GridItem xs={12} sm={4} md={4}>

                                {/* {mapThreeRecentProps} */}

                            </GridItem>
                        </GridContainer>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
    
    const mapStateToProps = (state) => {
        return { 
            top3Residences: state.residences.residenceListingsByID
        }
    }
    
    const mapDispatchToProps = (dispatch) => ({
        functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(SectionSimilarStories);