import { AUTH } from "../actions/consts";
import { IAction } from "../interface";
import { IAuthInitialState } from "../interface";

export default "not-error";

const initialState: IAuthInitialState = {
  status: "",
  data: null,
  errors: [],
};

export const loginReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case `${AUTH.USER_LOGIN}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };

    case `${AUTH.USER_LOGIN}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        data: action.payload,
      };

    case `${AUTH.USER_LOGIN}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        errors: [...action.errors],
      };

    default:
      return state;
  }
};
