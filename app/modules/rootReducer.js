import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form/immutable';

import {
    userReducer,
    suggestionsReducer,
    globalReducer,
    authReducer,
    placesReducer
} from './index';

const rootReducer = combineReducers({
    user        : userReducer,
    suggestions : suggestionsReducer,
    places      : placesReducer,
    global      : globalReducer,
    auth        : authReducer,
    form        : formReducer,
});

export default rootReducer;
