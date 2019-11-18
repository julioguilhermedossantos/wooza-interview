import { all } from "redux-saga/effects";
import { UsersSaga } from "./modules/User/redux/saga";

export function* MainSaga() {
  yield all([UsersSaga()]);
}
