export interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cartId: string;
}

export type OneCustomerResponse = Customer;