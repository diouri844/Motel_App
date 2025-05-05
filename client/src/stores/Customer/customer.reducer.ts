
import { intialCustomerState } from "@/lib/init.stores";
import * as customerActionType from "@/stores/Customer/customerActions.type";
import { intialCustomerStateType } from "@/types/states/CustomerState.type";


// setup a intila state :




export const customerReducerConfig = (state: intialCustomerStateType = intialCustomerState, action: any) => {
    switch (action.type) {
        case customerActionType.SET_CUSTOMER_DATA:
            return {
                ...state,
                customerData: [...action.payload]
            };
        case customerActionType.GET_CUSTOMER_DATA:
            return {
                ...state
            };
        case customerActionType.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case customerActionType.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: ""
            };
        case customerActionType.ADD_CUSTOMER:
            // extract the inventory id from the payload : 
            const payload = action.payload;
            return {
                ...state,
                newAddedCustomers: state.newAddedCustomers + 1,
                customerData: [...state.customerData, payload],
            };
        default:
            return state;
    }
}