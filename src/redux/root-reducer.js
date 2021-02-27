import { combineReducers } from 'redux';

import nameReducer from './Name/name.reducer';

export default combineReducers({
    info: nameReducer
});