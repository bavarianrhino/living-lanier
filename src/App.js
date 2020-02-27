import React from 'react';
import livinglaniersunset from './media/livinglaniersunset.jpg';
import './stylesheets/App.css';

function App() {
    return (        	
        <div className="main-area center-text" style={{ opacity: '.8', backgroundImage: `url(${livinglaniersunset})` }}>
            <div className="display-table">
                <div className="display-table-cell">

                    <h2 className="title font-white"><b>Comming Soon</b></h2>
                    <h1 className="title font-white"><b>LIVING LANIER</b></h1>
                    <p className="desc font-white">Lanier Life Group</p>

                    {/* <!-- social-btn --> */}
                    <ul className="social-btn font-white">
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">google</a></li>
                        <li><a href="#">instagram</a></li>
                    </ul>

                {/* </div> <!-- display-table --> */}
                </div>
            {/* </div> <!-- display-table-cell --> */}
            </div>
        {/* </div> <!-- main-area --> */}
        </div>
    );
}

export default App;