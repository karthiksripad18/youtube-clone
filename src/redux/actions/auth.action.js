import firebase from 'firebase/compat/app';
import auth from '../../firebase';

import {LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from '../actionType';

/*
    Returns an Async Function
    Async function takes "dispatch" as parameter
    Inside this Async function, an action is dispatched
*/ 
export const login = () => {
    return async (dispatch) => {
        try {
            dispatch({type: LOGIN_REQUEST})
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await auth.signInWithPopup(provider);
            console.log(res);
            const accessToken = res.credential.accessToken;
            const profile = {
                name: res.additionalUserInfo.profile.name,
                photoURL: res.additionalUserInfo.profile.photoURL
            }
            sessionStorage.setItem("ytc-access-token", accessToken);
            sessionStorage.setItem("ytc-user", JSON.stringify(profile));

            dispatch ({type: LOGIN_SUCCESS, payload: accessToken});
            dispatch ({type: LOAD_PROFILE, payload: profile});
        }
        catch (error) {
            console.log(error.message);
            dispatch({
                type: LOGIN_FAIL,
                payload: error.message
            })
        }
    }
}

/*
    Logout action creator returns a function
    In this function, we call dispatch after an async request
*/ 
export const log_out = () => {
    return async (dispatch) => {
        await auth.signOut();
        dispatch({type: LOGOUT});
        sessionStorage.removeItem("ytc-access-token");
        sessionStorage.removeItem("ytc-user");
    }
}