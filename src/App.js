import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';

import "assets/scss/material-kit-react.scss?v=1.8.0";

import { fetchResidences } from './actions';

import AboutUs from './pages/AboutUsPage/AboutUsPage'
import Contact from './pages/ContactPage/ContactPage'
import Legal from './pages/LegalPage/LegalPage'
import Landing from './pages/LandingPage/LandingPage'
import Listings from './pages/ListingsPage/ListingsPage'

var hist = createBrowserHistory();

class App extends Component {

    componentDidMount() {
        document.title = 'Living Lanier | Buy Sell and Search Homes on Lake Lanier';
        this.props.fetchResidences();
        // this.props.fetchProperties();
    }

    render() {
        return (
            <div>
                <Router history={hist}>
                    <Switch>
                        <Route exact path='/about' component={AboutUs} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/legal' component={Legal} />
                        <Route exact path='/listings' component={Listings} />
                        <Route exact path='/' component={Landing} />
                    </Switch>
                </Router>
            </div>
        )
    };
};

function mapStateToProps(state) {
    return { residences: state.residences }
}

export default connect(mapStateToProps, { fetchResidences })(App);