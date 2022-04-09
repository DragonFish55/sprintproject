import { SETUSERVAL } from "./username.types";

const INITIAL_STATE = {
    username:null,
}

const usernameReducer = (state = INITIAL_STATE, action) => {
    console.log(action.value)
    switch (action.type) {
        case SETUSERVAL:
            return {
                ...state, username: action.value
            }
        default: return state;
    }
}

export default usernameReducer;