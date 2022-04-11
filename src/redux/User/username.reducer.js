import { SETUSERVAL, SETNULL } from "./username.types";

const INITIAL_STATE = {
    username:null,
}

const usernameReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case SETUSERVAL:
            return {
                ...state, username: action.value
            }
        default: return state;
    }
}

export default usernameReducer;