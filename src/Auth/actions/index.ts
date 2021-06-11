import { Dispatch } from "redux";
import { IAuthPayload } from "../interface";
import { AUTH } from "./consts";

export const login = (data: IAuthPayload) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: `${AUTH.USER_LOGIN}_PENDING`,
    });
    dispatch({
      type: `${AUTH.USER_LOGIN}_SUCCESS`,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: `${AUTH.USER_LOGIN}_ERROR`,
      payload: error,
    });
  }
};
