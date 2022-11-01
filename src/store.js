/* createStore allows us to create a store with a given reducer and a middleware*/
/* combineReducers is used when an application has multiple reducers */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { setExpressionField, setVariables, modifyResult } from './reducers'
/* createLogger allows us to control the redux actions in the console */
import { createLogger } from 'redux-logger';
// thunkMiddleware allows us to control  redux Async actions and manage them
import thunkMiddleware from 'redux-thunk';

/* intance of the logger */
const logger = createLogger();
// in order to use multiple reducers we have to create a rootReducer by calling combineReducers function

const rootReducer = combineReducers({ 
    setExpressionField, 
    setVariables,
    modifyResult });

// The store A.K.A. the state of the app is declared with the root reducer, and as
// an optional second parameter we can pass a middleware, to keep track of the actions
export const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware,logger));