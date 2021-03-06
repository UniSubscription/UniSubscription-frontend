export interface ISubscription {
  id: number;
  name: string;
  subscriptionMail: string;
  nextBillingDate: Date;
  cost: number;
  subscriptionDate: Date;
}

export interface ISubscriptionResp {
  items: ISubscription[];
  total: number;
  index: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ISubscriptionInitialState {
  status: string;
  data: ISubscriptionResp | null;
  errors: [];
}
