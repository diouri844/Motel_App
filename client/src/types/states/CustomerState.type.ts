import CustomerItem from "@/types/Customer.type";

export type intialCustomerStateType = {
    searchQuery: string;
    newAddedCustomers: number;
    customerData: CustomerItem[];
}