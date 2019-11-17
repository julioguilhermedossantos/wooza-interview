import * as Types from "./types";

export const getUsersAction = () => ({
  type: Types.GET_USERS
});
export const setUsersAction = users => ({
  type: Types.GET_USERS,
  payload: { users }
});
