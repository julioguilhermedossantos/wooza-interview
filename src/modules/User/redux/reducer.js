import * as Types from "./types";

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USERS: {
      console.log("no reducer: ", action.payload.users);
      return {
        ...state,
        users: action.payload.users
      };
    }
    case Types.GET_USERS: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
