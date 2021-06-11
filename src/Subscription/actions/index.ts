import { SUBSCRIPTION_ACTIONS } from "./consts";
import { subscriptionService } from "../service";
import { Dispatch } from "redux";

export const getSubscription =
  (page: number, size: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_PENDING`,
    });
    subscriptionService
      .getSubscription(page, size)
      .then((res) => {
        let { data } = res;
        dispatch({
          type: `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_SUCCESS`,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: `${SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION}_ERROR`,
          error: err,
        });
      });
  };
