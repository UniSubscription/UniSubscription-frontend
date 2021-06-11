import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async get(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }

  async getAddHeafer(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: `${sessionStorage.getItem("token")}`,
      },
    });
  }

  async post(url: string, body: any) {
    return await axios.post(`${this.baseUrl}/${url}`, body);
  }
}
