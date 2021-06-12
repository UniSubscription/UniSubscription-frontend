import { HttpClient } from "../httpClient";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://172.28.0.37:8080/api");
  }

  async getSubscription(page: number, size: number) {
    return this.getWithHeafer(`subscriptions?page=${page}&size=${size}`);
  }

  async addSubscription(newData: any) {
    return this.postWithHeader(`subscriptions`, newData);
  }
}

export const subscriptionService = new SubscriptionService();
