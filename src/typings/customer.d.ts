export interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type OneCustomerResponse = Customer;