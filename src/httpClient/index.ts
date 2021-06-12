import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async get(url: string, header: false) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }

  async getWithHeafer(url: string) {
    return await axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
  }

  async post(url: string, body: any) {
    return await axios.post(`${this.baseUrl}/${url}`, body);
  }

  async postWithHeader(url: string, body: any) {
    return await axios.post(`${this.baseUrl}/${url}`, body);
  }
}
