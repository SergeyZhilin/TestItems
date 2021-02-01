import { all } from 'redux-saga/effects';

import { casesSaga } from "./casesSaga";
import { profileSaga } from "./profileSaga";

export default function* rootSaga() {
  yield all([
    casesSaga(),
    profileSaga()
  ]);
}
