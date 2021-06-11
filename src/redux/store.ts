import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer } from "../Auth/reducer";
import { subscriptionReducer } from "../Subscription/reducer";

export const rootReducer = combineReducers({
  user: loginReducer,
  subscription: subscriptionReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
