import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import { RootReducer } from './reducers/RootReducer';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
window.axios = axios;

const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

console.log(`ENVIRONMENT ---- ${process.env.NODE_ENV}`) //process.env.REACT_APP_KEY
console.log(`BRIDGE INTERACTIVE API KEY ---- ${process.env.BRIDGE_INTERACTIVE_API_SERVER_TOKEN}`) //process.env.REACT_APP_KEY
console.log(`GMAPS API KEY ---- ${process.env.GOOGLE_MAPS_API_KEY}`) //process.env.REACT_APP_KEY
console.log(`TEST API KEY ---- ${process.env.TEST_API_KEY}`) //process.env.REACT_APP_KEY
console.log(`GREETING ---- ${process.env.GREETING}`) //process.env.REACT_APP_KEY
serviceWorker.unregister();
