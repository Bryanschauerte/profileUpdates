import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import Base from './base/Base';
import rootReducer from './reducers/rootReducer';






const store = createStore(
    rootReducer,
    applyMiddleware()
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
