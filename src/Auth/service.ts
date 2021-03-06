import { HttpClient } from "../httpClient";
import { ILoginPayload } from "./interface";

class AuthService extends HttpClient {
  constructor() {
    super("http://172.28.0.228:8080/api");
  }

  async loginUser(newUser: ILoginPayload) {
    return this.post(`authenticate`, newUser);
  }

  async registerUser(newUser: any) {
    return this.post(`register`, newUser);
  }

  async getUser() {
    return this.getWithHeafer("user");
  }
}

export const authService = new AuthService();
