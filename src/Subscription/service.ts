import { HttpClient } from "../httpClient";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://localhost:8080/api");
  }

  async getSubscription(page: number, size: number) {
    return this.get(`subscriptions?page=${page}&size=${size}`);
  }

  async addSubscription(newData: any) {
    return this.post(`subscriptions`, newData);
  }
}

export const subscriptionService = new SubscriptionService();
