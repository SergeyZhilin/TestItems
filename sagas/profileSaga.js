import {takeLatest, call, put} from 'redux-saga/effects';
import { API, Auth } from 'aws-amplify';

import * as actionType from '../actions/actionTypes';

function* currentSession() {
    return yield call(() => Auth.currentSession());
}

function* signOut() {
    return yield call(() => Auth.signOut());
}

function* signIn(fields) {
    const { email, password } = fields;
    return yield call(() => Auth.signIn(email, password));
}

function* signUp(fields) {
    return yield call(() => Auth.signUp({...fields}));
}

function* confirmSignUp(fields) {
    return yield call(() => Auth.confirmSignUp(fields.email, fields.confirmationCode));
}

/**
    Get UserProfile from API
 **/
function* getProfile() {
    return yield call(() => API.get("example", "example", {}));
}

/**
 Get UserInfo from API
 **/
function* getUserInfo() {
    return yield call(() => Auth.currentUserInfo());
}

function* onLoad() {
    try {
        yield currentSession();
    } catch (e) {
        yield* onLoadError(e)
    }
}

function* confirmSignUpRequest(data) {
    try {
        const { email, confirmationCode } = data.payload;
        yield confirmSignUp({email, confirmationCode});
        yield signInRequest(data);
    } catch (error) {
        yield* confirmSignUpError(error)
    }
}

function* signInRequest(data) {
    try {
       yield signIn(data.payload);
       yield signInSuccess();
    } catch (error) {
        yield* signInError(error);
    }
}

function* signUpRequest(data) {
    try {
       yield signUp(data.payload);
       yield signUpSuccess();
    } catch (error) {
        yield* signUpError(error);
    }
}

function* getProfileRequest() {
    try {
        const profile = yield getProfile();
        yield getProfileSuccess(profile)
    } catch (error) {
        yield* getProfileError(error);
    }
}

function* getUserInfoRequest() {
    try {
        const user = yield getUserInfo();
        yield getUserInfoSuccess(user)
    } catch (error) {
        yield* getUserInfoError(error);
    }
}

function* getProfileSuccess(data) {
    yield put({
        type: actionType.GET_PROFILE_SUCCESS,
        payload: data
    });
}

function* signInSuccess() {
    yield put({
        type: actionType.SIGN_IN_SUCCESS,
    });
}

function* signUpSuccess() {
    yield put({
        type: actionType.SIGN_UP_SUCCESS,
    });
}

function* getUserInfoSuccess(data) {
    yield put({
        type: actionType.GET_USER_SUCCESS,
        payload: data
    });
}

function* signInError(error) {
    yield put({
        type: actionType.SIGN_IN_ERROR,
        payload: error
    })
}

function* signUpError(error) {
    yield put({
        type: actionType.SIGN_UP_ERROR,
        payload: error
    })
}

function* confirmSignUpError(error) {
    yield put({
        type: actionType.CONFIRM_SIGN_UP_ERROR,
        payload: error
    })
}

function* getProfileError(error) {
    yield put({
        type: actionType.GET_PROFILE_ERROR,
        payload: error
    })
}

function* getUserInfoError(error) {
    yield put({
        type: actionType.GET_USER_ERROR,
        payload: error
    })
}

function* onLoadError(error) {
    yield put({
        type: actionType.ON_LOAD_ERROR,
        payload: error
    })
}


export function* profileSaga() {
    yield takeLatest(actionType.GET_PROFILE_REQUEST, getProfileRequest);
    yield takeLatest(actionType.GET_USER_REQUEST, getUserInfoRequest);
    yield takeLatest(actionType.ON_LOAD, onLoad);
    yield takeLatest(actionType.SIGN_OUT, signOut);
    yield takeLatest(actionType.SIGN_IN_REQUEST, signInRequest);
    yield takeLatest(actionType.SIGN_UP_REQUEST, signUpRequest);
    yield takeLatest(actionType.CONFIRM_SIGN_UP_REQUEST, confirmSignUpRequest);
}
