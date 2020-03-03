import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';

// import './stylesheets/App.css';
import "assets/scss/material-kit-react.scss?v=1.8.0";
import LivingLanierSunset from './assets/livinglaniersunset.jpg';

import { fetchHomes } from './actions';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from './pages/Home'
import Landing from './pages/LandingPage/LandingPage'
import Listings from './pages/ListingsPage/ListingsPage'
// import Dashboard from './Dashboard'

var hist = createBrowserHistory();

class App extends Component {

    componentDidMount() {
        document.title = 'Living Lanier | Buy Sell and Search Homes on Lake Lanier';

        // this.props.fetchHomes();
    }

    render() {
        return (
            <div>
                <Router history={hist}>
                    <Switch>
                        <Route exact path='/listings' component={Listings} />
                        {/* <Route exact path='/contact' component={Contact} /> */}
                        <Route exact path='/' component={Landing} />
                    </Switch>
                </Router>
            </div>
        )
    };
};

function mapStateToProps(state) {
    return { homes: state.homes }
}

export default connect(mapStateToProps, { fetchHomes })(App);