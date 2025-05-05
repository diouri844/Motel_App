
import { intialInventoryState } from "@/lib/init.stores";
import * as inventoryActionType from "@/stores/Inventory/inventoryActions.type";
import { intialInventoryStateType } from "@/types/states/InventoryState.type";


// setup the reducer :

export const inventoryReducerConfig = (
    state: intialInventoryStateType = intialInventoryState, action: any) => {
    switch (action.type) {
        case inventoryActionType.SET_INVENTORY_DATA:
            return {
                ...state,
                inventoryData: action.payload
            };
        case inventoryActionType.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        case inventoryActionType.SET_SELECTED_INVENTORY:
            console.log(action.payload);
            return {
                ...state,
                selectedInventory: action.payload
            };
        case inventoryActionType.GET_SELECTED_INVENTORY:
            return state;
        case inventoryActionType.SET_TOTAL_CUSTOMERS:
            return {
                ...state,
                totalCustomers: action.payload
            };
        case inventoryActionType.SET_TOTAL_PRODUCTS:
            return {
                ...state,
                totalProcuts: action.payload
            };
        case inventoryActionType.SET_TOTAL_SALES:
            return {
                ...state,
                totalSales: action.payload
            };
        case inventoryActionType.SET_TOTAL_STOCKS:
            return {
                ...state,
                totalStocks: action.payload
            };
        case inventoryActionType.SET_TOTAL_VENDORS:
            return {
                ...state,
                totalVendors: action.payload
            };
        case inventoryActionType.SET_TOTAL_INVENTORY:
            return {
                ...state,
                totalInventory: action.payload
            };
        case inventoryActionType.GET_INVENTORY_DATA:
            return {
                ...state
            };
        case inventoryActionType.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: ''
            };
        case inventoryActionType.CLEAR_SELECTED_INVENTORY:
            return {
                ...state,
                selectedInventory: "",
                totalCustomers: 0,
                totalProcuts: 0,
                totalSales: 0,
                totalStocks: 0,
                totalVendors: 0,
                totalInventory: 0
            };
        case inventoryActionType.ADD_INVENTORY:
            return {
                ...state,
                inventoryData: [...state.inventoryData, action.payload]
            };
        case inventoryActionType.UPDATE_INVENTORY:
            const { inventoryId, ...rest } = action.payload; // Extract id and other data
            const updatedInventory = state.inventoryData.map(
                item => item.id === inventoryId ? { ...item, ...rest } : item
            );
            return {
                ...state,
                inventoryData: updatedInventory
            };
        case inventoryActionType.ADD_CUSTOMER_DB:
            return {
                ...state,
                inventoryData: [...state.inventoryData, action.payload]
            };
        case inventoryActionType.ADD_SALE_DB:
            return {
                ...state,
                inventoryData: [...state.inventoryData, action.payload]
            };
        default:
            return state;
    }
};