import { ISubscription, ISubscriptionResp } from "../interface";
import { SUBSCRIPTION_ACTIONS } from "./consts";

interface GET_SUBSCRIPTION {
  type: SUBSCRIPTION_ACTIONS.GET_SUBSCRIPTION;
  payload: ISubscriptionResp;
  error: null;
}

interface ADD_RESERVATION_SUBSCRIPTION {
  type: SUBSCRIPTION_ACTIONS.ADD_SUBSCRIPTION;
  payload: ISubscription;
  error: null;
}

export type Action = GET_SUBSCRIPTION | ADD_RESERVATION_SUBSCRIPTION;
