import * as Types from "./types";

export const getUsersAction = () => {
  return {
    type: Types.GET_USERS
  };
};
export const setUsersAction = users => {
  return {
    type: Types.SET_USERS,
    payload: { users }
  };
};
