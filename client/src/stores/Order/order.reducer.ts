
import { initialOrderState } from "@/lib/init.stores";
import * as OrderActionType from "@/stores/Order/order.Actions.type";
import { initialOrderStateType } from "@/types/states/OrderState.type";





// let setup the order reducer :
export const orderReducerConfig = (
    state: initialOrderStateType = initialOrderState,
    action: any
) => {
    switch (action.type) {
        case OrderActionType.SET_ORDER_DATA:
            return {
                ...state,
                orders: action.payload
            };
        case OrderActionType.GET_ORDER_DATA:
            return state.orders;
        case OrderActionType.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case OrderActionType.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: ""
            };
        case OrderActionType.SET_SELECTED_ORDER:
            return {
                ...state,
                selectedOrder: action.payload
            };
        case OrderActionType.GET_SELECTED_ORDER:
            return state.selectedOrder;
        case OrderActionType.SET_INVENTORY_PARENT:
            return {
                ...state,
                inventoryParent: action.payload
            };
        case OrderActionType.GET_INVENTORY_PARENT:
            return state.inventoryParent;
        case OrderActionType.SET_CUSTOMER_PARENT:
            return {
                ...state,
                customerParent: action.payload
            };
        case OrderActionType.GET_CUSTOMER_PARENT:
            return state.customerParent;
        default:
            return state;
    }
};