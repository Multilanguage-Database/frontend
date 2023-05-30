export interface PaymentMethod {
    name: string;
    description: string;
    _id: string;
  }

export type AllPaymentMethodsResponse = PaymentMethod[];