import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken, saveUserId, clearUserId} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({type: SET_AUTH_TOKEN, authToken});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({type: CLEAR_AUTH});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({type: AUTH_REQUEST});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({type: AUTH_SUCCESS, currentUser});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({type: AUTH_ERROR, error});

export const SET_USER_ID = 'SET_USER_ID';
export const setUserId = user_id => ({type: SET_USER_ID, user_id});

export const CLEAR_USER = 'CLEAR_USER';
export const clearUser = () => ({type: CLEAR_USER});

// Stores the auth token in state and localStorage, and decodes and stores the
// user data stored in the token
const storeAuthInfo = (authToken, user_id, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
    dispatch(setUserId(user_id));
    saveUserId(user_id);
};

const storeUserInfo = (user_id, dispatch) => {
    dispatch(setUserId(user_id));
    saveUserId(user_id);
}

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    // Reject any requests which don't return a 200 status, creating errors which
    // follow a consistent format
        .then(res => normalizeResponseErrors(res)).then(res => res.json()).then(({authToken, user_id}) => storeAuthInfo(authToken, user_id, dispatch)).catch(err => {
        const {code} = err;
        const message = code === 401
            ? 'Incorrect username or password'
            : 'Unable to login, please try again';
        dispatch(authError(err));
        // Could not authenticate, so return a SubmissionError for Redux Form
        return Promise.reject(new SubmissionError({_error: message}));
    }));
};

export const logout = (user_id) => (dispatch, getState) => {
    console.log('logout ran');
    const authToken = getState().auth.authToken;
    dispatch(clearAuth());
    clearAuthToken(authToken);
    dispatch(clearUser());
    clearUserId(user_id);
}

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                // Provide our existing token as credentials to get a new one
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials are invalid
            // or expired, or something else went wrong, so clear them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};