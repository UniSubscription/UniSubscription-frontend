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

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  fullname: string;
}

export interface IAuthInitialState {
  status: string;
  data: IUser | null;
  errors: [];
}
