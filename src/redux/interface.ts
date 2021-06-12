import { IAuthInitialState } from "../Auth/interface";
import { ISubscriptionInitialState } from "../Subscription/interface";

export interface IAppState {
  user: IAuthInitialState;
  subscription: ISubscriptionInitialState;
}
