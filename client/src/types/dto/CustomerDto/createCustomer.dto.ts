export type CreateCustomerDto = {
    inventoryId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    createdAt?: Date;
};