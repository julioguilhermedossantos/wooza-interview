import { setUsersAction } from "./action";
import { all, put, call, takeEvery } from "redux-saga/effects";
import UserService from "./UserService";
import * as Types from "./types.js";

function* getUsersSaga() {
  const service = new UserService();
  try {
    console.log("No saga");
    const users = yield call(service.getUsers, "/assets/users.json");
    yield put(setUsersAction(users));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetUsersSaga() {
  yield takeEvery(Types.GET_USERS, getUsersSaga);
}

export function* UsersSaga() {
  yield all([watchGetUsersSaga()]);
}
