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

console.log(`FMLS KEY IS: TESTAPI ----- ENVIRONMENT IS IN: ${process.env.NODE_ENV}`) //process.env.REACT_APP_KEY
serviceWorker.unregister();
