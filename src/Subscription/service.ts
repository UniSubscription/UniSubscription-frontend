import { HttpClient } from "../httpClient";
import { ISubscription } from "./interface";

class SubscriptionService extends HttpClient {
  constructor() {
    super("http://172.28.0.37:8080/api");
  }

  async getSubscription(page: number, size: number) {
    return this.getWithHeafer(`subscriptions?page=${page}&size=${size}`);
  }

  async getSubscriptionById(id: number) {
    return this.getWithHeafer(`subscriptions/${id}`);
  }

  async paySubscription(id: number) {
    return this.getWithHeafer(`subscriptions/${id}/donePayment
    `);
  }

  async addSubscription(newData: ISubscription) {
    return this.postWithHeader(`subscriptions`, newData);
  }

  async updateSubscription(updateDate: ISubscription, id: number) {
    return this.postWithHeader(`subscriptions/${id}`, updateDate);
  }

  async deleteSubscription(id: number) {
    return this.deleteWithHeader(`subscriptions/${id}`);
  }
}

export const subscriptionService = new SubscriptionService();
