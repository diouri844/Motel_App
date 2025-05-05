import * as CustomerAction from "@/stores/Customer/customerActions.type";



export const setCustomerData = (data: any) => ({
    type: CustomerAction.SET_CUSTOMER_DATA,
    payload: data
});

export const getCustomerData = () => ({
    type: CustomerAction.GET_CUSTOMER_DATA
});

export const setSearchQuery = (query: string) => ({
    type: CustomerAction.SET_SEARCH_QUERY,
    payload: query
});

export const clearSearchQuery = () => ({
    type: CustomerAction.CLEAR_SEARCH_QUERY
});

export const addCustomer = (payload: any) => ({
    type: CustomerAction.ADD_CUSTOMER,
    payload
});

export const updateCustomer = (customerId: string, payload: any) => ({
    type: CustomerAction.UPDATE_CUSTOMER,
    payload: { ...payload, customerId }
});

export const removeCustomer = (customerId: string) => ({
    type: CustomerAction.REMOVE_CUSTOMER,
    payload: customerId
});
