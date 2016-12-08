import {combineReducers} from 'redux';


import uIState from '../UIControl/reducers/root';
import siteInfo from '../apiHandling/reducer';

export default combineReducers({

  uIState, siteInfo

})
