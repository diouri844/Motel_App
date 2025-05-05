import * as OrderAction from "@/stores/Order/order.Actions.type";


export const setOrderData = (data: any[]) => ({
    type: OrderAction.SET_ORDER_DATA,
    payload: data
});


export const getOrderData = () => ({
    type: OrderAction.GET_ORDER_DATA
});


export const setSearchQuery = (query: string) => ({
    type: OrderAction.SET_SEARCH_QUERY,
    payload: query
});


export const clearSearchQuery = () => ({
    type: OrderAction.CLEAR_SEARCH_QUERY
});


export const setSelectedOrder = (data: any) => ({
    type: OrderAction.SET_SELECTED_ORDER,
    payload: data
});


export const getSelectedOrder = () => ({
    type: OrderAction.GET_SELECTED_ORDER
});


export const setOrdrrCustomer = (data: any) => ({
    type: OrderAction.SET_CUSTOMER_PARENT,
    payload: data
});


export const getOrderCustomer = () => ({
    type: OrderAction.GET_CUSTOMER_PARENT
});


export const setOrdrrInventory = (data: any) => ({
    type: OrderAction.SET_INVENTORY_PARENT,
    payload: data
});


export const getOrderInventory = () => ({
    type: OrderAction.GET_INVENTORY_PARENT
});