import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';

import "assets/scss/material-kit-react.scss?v=1.8.0";

import { fetchHomes } from './actions';

import Landing from './pages/LandingPage/LandingPage'
import Listings from './pages/ListingsPage/ListingsPage'

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
    return { homes: state.homes }
}

export default connect(mapStateToProps, { fetchHomes })(App);