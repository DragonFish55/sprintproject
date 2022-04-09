import { combineReducers } from "redux";

import usernameReducer from './User/username.reducer';

const mainReducer = combineReducers({
    username: usernameReducer,
})

export default mainReducer;