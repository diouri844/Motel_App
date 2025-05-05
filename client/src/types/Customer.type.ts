type CustomerItem = {
    id: string;
    inventoryId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string | null;
    country: string;
    createdAt: string;
};


export default CustomerItem;