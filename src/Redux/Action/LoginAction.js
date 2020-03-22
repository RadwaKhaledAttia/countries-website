import {
    FETCH_LOGIN_SUCCESS
} from "./type";


export function LoginRequest(data) {
    return (dispatch, getState) => {
        saveToLocalStorage('user',  JSON.stringify(data));
        dispatch({ type: FETCH_LOGIN_SUCCESS, payload: data });
    }
}


export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
