import * as ProductActionType from "@/stores/Product/productAction.type";
import { InitialProductStateType } from "@/types/states/ProductState.type";
import { initialProductStoreState } from "@/lib/init.stores";



// setup the reducer : 
export const productReducerConfig = (
    state: InitialProductStateType = initialProductStoreState,
    action: any
) => {
    switch (action.type) {
        case ProductActionType.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case ProductActionType.SET_PRODUCT_DATA:
            return {
                ...state,
                products: action.payload
            };
        case ProductActionType.GET_PRODUCT_DATA:
            return state.products;
        case ProductActionType.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case ProductActionType.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: ""
            };
        default:
            return state;
    };
};