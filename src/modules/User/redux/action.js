import * as Types from "./types";

export const getUsersAction = () => {
  return {
    type: Types.GET_USERS
  };
};
export const setUsersAction = users => {
  console.log("users Set: ", users);
  return {
    type: Types.SET_USERS,
    payload: { users }
  };
};
