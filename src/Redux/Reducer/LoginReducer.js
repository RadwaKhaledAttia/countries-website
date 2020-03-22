import * as types from "../Action/type";

const initialState = {
    loginSuccess: false,
    user: null
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                user: action.payload
            };

        default:
            return state;
    }

}
export default AuthReducer;