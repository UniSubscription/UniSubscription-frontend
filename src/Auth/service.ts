import { HttpClient } from "../httpClient";
import { IRegisterPayload } from "./interface";

class AuthService extends HttpClient {
  constructor() {
    super("https://60b2c58be0275c0017bfc74c.mockapi.io");
  }

  async registerUser(newUser: IRegisterPayload) {
    return this.post(`demo/v1/room/`, newUser);
  }
}

export const authService = new AuthService();
