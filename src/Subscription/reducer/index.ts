import { Action } from "../actions/actionsType";
import { SUBSCRIPTION_ACTIONS } from "../actions/consts";

const initialState = {
  status: "",
  data: {},
  errors: [],
};

export const subscriptionReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_PENDING`:
      return {
        ...state,
        status: "PENDING",
      };
    case `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_SUCCESS`:
      return {
        ...state,
        data: action.payload,
        status: "SUCCESS",
      };
    case `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_ERROR`:
      return {
        ...state,
        err: [action.error],
        status: "ERROR",
      };
    default:
      return state;
  }
};
