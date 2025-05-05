import { initialStockState } from "@/lib/init.stores";
import * as StockActionTypes from "@/stores/Stock/stockAction.type";
import { StockStoreType } from "@/types/states/StockState.type";



export const stockReducerConfig = (
    state = initialStockState,
    action: any
) => {
    switch (action.type) {
        case StockActionTypes.SET_STOCK_DATA:
            return {
                ...state,
                stocks: action.payload
            };
        case StockActionTypes.GET_STOCK_DATA:
            return state.stocks;
        case StockActionTypes.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case StockActionTypes.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: ""
            };
        case StockActionTypes.ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.payload]
            };
        case StockActionTypes.EDIT_STOCK:
            const stockTarget: StockStoreType = state.stocks.filter(item => item.stockDetails.id === action.payload.target)[0];
            const updatedStock = {
                ...stockTarget,
                name: action.payload.data.name,
            };
            return {
                ...state,
                stocks: state.stocks.map(stock => (stock.stockDetails.id === action.payload.target ? updatedStock : stock)),
            };
        default:
            return state;
    };
};