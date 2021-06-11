export interface IAuthPayload {
  email: string;
  password: string;
}

export interface IAction {
  type: string;
  payload: any;
  errors: any;
}

export interface IRegisterPayload {
  name: string;
  surname: string;
  email: string;
  password: string;
}
