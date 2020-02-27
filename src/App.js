import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './stylesheets/App.css';
import LivingLanierSunset from './media/livinglaniersunset.jpg';

import * as actions from './actions'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
// import Dashboard from './Dashboard'

class App extends Component {

    componentDidMount() {
        document.title = 'Living Lanier | Buy Sell and Search Homes on Lake Lanier';
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{backgroundColor: '#fb6f6f'}} className="cover">
                        <Header />
                        <Route exact path='/' component={Home} />
                        {/* <Route exact path='/login' component={Login} /> */}
                        {/* <Route exact path='/thankyou' component={Thankyou} /> */}
                        {/* <Route exact path='/surveys' component={Dashboard} /> */}
                        {/* <Route path='/surveys/new' component={SurveyNew} /> */}
                    </div>
                </BrowserRouter>
            </div>
        )
    };
};

export default connect(null, actions)(App);

// function App() {
//     return (        	
//         <div className="main-area center-text" style={{ opacity: '.8', backgroundImage: `url(${livinglaniersunset})` }}>
//             <div className="display-table">
//                 <div className="display-table-cell">

//                     <h2 className="title font-white"><b>Comming Soon</b></h2>
//                     <h1 className="title font-white"><b>LIVING LANIER</b></h1>
//                     <p className="desc font-white">Lanier Life Group</p>

//                     {/* <!-- social-btn --> */}
//                     <ul className="social-btn font-white">
//                         <li><a href="#">facebook</a></li>
//                         <li><a href="#">twitter</a></li>
//                         <li><a href="#">google</a></li>
//                         <li><a href="#">instagram</a></li>
//                     </ul>

//                 {/* </div> <!-- display-table --> */}
//                 </div>
//             {/* </div> <!-- display-table-cell --> */}
//             </div>
//         {/* </div> <!-- main-area --> */}
//         </div>
//     );
// }

// export default App;