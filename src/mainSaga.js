import { UsersSaga } from "./modules/User/redux/saga";
import { all } from "redux-saga/effects";

export function* MainSaga() {
  yield all([UsersSaga()]);
}
