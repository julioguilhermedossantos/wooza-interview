import { combineReducers } from "redux";
import users from "../src/modules/User/redux/reducer";

const MainReducer = combineReducers({
  user: users
});

export default MainReducer;
