import {combineReducers} from 'redux';

import horizontalPView from '../horizontalProductView/reducers/index.js';
import uIState from '../UIControl/reducers/root';

export default combineReducers({
  horizontalPView,
  uIState

})
