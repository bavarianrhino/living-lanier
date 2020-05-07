import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { GREETING } from '../functions/env_vars'

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

console.log(`ENVIRONMENT ---- ${process.env.NODE_ENV}`)
console.log(`REDIRECT ---- ${process.env.REACT_APP_REDIRECT_DOMAIN}`)
console.log(`MLS DATASET ---- ${process.env.REACT_APP_MLS_DATASET}`)
// console.log(`BRIDGE INTERACTIVE API KEY FIRST(5) ---- ${process.env.REACT_APP_API_BRIDGE_INTERACTIVE_API_SERVER_TOKEN.slice(0, 5)}`)
// console.log(`GOOGLE MAPS API KEY FIRST(5) ---- ${process.env.REACT_APP_API_GOOGLE_MAPS_API_KEY.slice(0, 5)}`)
serviceWorker.unregister();
