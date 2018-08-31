import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//Reducers
import { searchRobots, requestRobots } from './reducers/reducers';
//Logger is only a tool for extra log info
import { createLogger } from 'redux-logger';
//Middleware tool
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
//CSS STYLING
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
//Use combineReducer to wrapp up 2 or more reducers into a root reducer
const rootReducer = combineReducers({ requestRobots, searchRobots });

//it allows us to use middleware for API request and fetch, makes de reducer wait for the promise
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// Provider make the store available to all container components in the app without the need of passing it explicitly.
ReactDOM.render(
	<Provider store = {store}>
		<App />	
	</Provider>, document.getElementById('root'));
registerServiceWorker();
