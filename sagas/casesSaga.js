import { takeLatest, put, call } from 'redux-saga/effects';
import {API, Auth} from 'aws-amplify';

import * as actionType from '../actions/actionTypes';

//todo remove after getting cases from api
import patrick from "../template/patrickCase";

function* getCurrentCase(id) {
    const res = yield call(() => API.get("example", `content/lab/${id}`,{}));
    console.log(res)
    return patrick
}
function* getCatalogs() {
    return yield call(() => API.get("example", `content/catalog`,{}));
}

function* sendCasesRequest() {
    try {
        const user = yield call(() => Auth.currentSession());
        if (user) {
           const allCases = yield getCatalogs();
           yield* fetchCasesSuccess(allCases);
        }
    } catch (error) {
        yield* fetchCasesErrors(error);
    }
}


function* getOneCaseRequest (payload) {
    const { payload :id } = payload;
    try {
        const currentCase = yield getCurrentCase(id);
        yield* fetchOneCaseSuccess(currentCase);
    } catch (error) {
        yield* fetchOneCaseErrors(error);
    }
}

function* changeTabRequest(payload) {
    const { payload :data } = payload;
    try {
        yield* changeTabSuccess(data);
    } catch (error) {
        yield* changeTabError(error);
    }
}

function* changeTabSuccess(payload) {
    yield put({
        type: actionType.CHANGE_TAB_SUCCESS,
        payload
    });
}

function* fetchCasesSuccess(cases) {
    yield put({
        type: actionType.GET_CASES_SUCCESS,
        payload: cases
    });
}

function* fetchOneCaseSuccess (userCase) {
    yield put({
        type: actionType.GET_ONE_CASE_SUCCESS,
        payload: userCase
    });
}

function* fetchCasesErrors(error) {
    yield put({
        type: actionType.GET_CASES_ERROR,
        payload: error
    })
}

function* fetchOneCaseErrors (error) {
    yield put({
        type: actionType.GET_ONE_CASE_ERROR,
        payload: error
    })
}

function* changeTabError(error) {
    yield put({
        type: actionType.CHANGE_TAB_ERROR,
        payload: error
    })
}


export function* casesSaga() {
    yield takeLatest(actionType.GET_CASES_REQUEST, sendCasesRequest);
    yield takeLatest(actionType.GET_ONE_CASE_REQUEST, getOneCaseRequest);
    yield takeLatest(actionType.CHANGE_TAB_REQUEST, changeTabRequest);
}
