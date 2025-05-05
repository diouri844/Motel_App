import * as StockActionTypes from "@/stores/Stock/stockAction.type";
import CreateStockDto from "@/types/dto/StockDto/createStock.dto";
import UpdateStockDto from "@/types/dto/StockDto/updateStock.dto";
import { StockStoreType } from "@/types/states/StockState.type";



export const setStockData = (data: StockStoreType[]) => ({
    type: StockActionTypes.SET_STOCK_DATA,
    payload: data
});

export const getStockData = () => ({
    type: StockActionTypes.GET_STOCK_DATA
});

export const setSearchQuery = (query: string) => ({
    type: StockActionTypes.SET_SEARCH_QUERY,
    payload: query
});


export const clearSearchQuery = () => ({
    type: StockActionTypes.CLEAR_SEARCH_QUERY
});

export const addStock = (data: CreateStockDto) => ({
    type: StockActionTypes.ADD_STOCK,
    payload: data
});

export const editStock = (data: UpdateStockDto, target: string) => ({
    type: StockActionTypes.EDIT_STOCK,
    payload: { data, target }
});