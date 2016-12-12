import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import Base from './base/Base';
import promise from "redux-promise-middleware";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';


const promiseMiddleWare = promise();



const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, promiseMiddleWare)
    );


class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Base/>
            </Provider>
        )
    }
}

export default Root;
