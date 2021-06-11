import { Dispatch } from "redux";
import { ILoginPayload } from "../interface";
import { authService } from "../service";
import { AUTH } from "./consts";

export const login = (data: ILoginPayload) => async (dispatch: Dispatch) => {
  dispatch({
    type: `${AUTH.USER_LOGIN}_PENDING`,
  });
  const newUser = await authService
    .loginUser(data)
    .then((res) => {
      sessionStorage.setItem("token", res.data.token);
      dispatch({
        type: `${AUTH.USER_LOGIN}_SUCCESS`,
        payload: res.data.user,
      });
    })
    .catch((err) =>
      dispatch({
        type: `${AUTH.USER_LOGIN}_ERROR`,
        errors: [err.message],
      })
    );
};
