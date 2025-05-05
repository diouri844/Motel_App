import ProductItem from "@/types/Product.type";
import { intialCustomerStateType } from "@/types/states/CustomerState.type";
import { intialInventoryStateType } from "@/types/states/InventoryState.type";
import { initialOrderStateType } from "@/types/states/OrderState.type";
import { InitialProductStateType } from "@/types/states/ProductState.type";
import { initialStockStateType } from "@/types/states/StockState.type";

export const initialStockState: initialStockStateType = {
    stocks: [],
    searchQuery: ""
};


export const initialProductStoreState: InitialProductStateType = {
    products: [] as unknown as ProductItem & { key: string, value: Object }[],
    searchQuery: "",
};


export const initialOrderState: initialOrderStateType = {
    orders: [],
    selectedOrder: null,
    searchQuery: "",
    customerParent: {},
    inventoryParent: {}
};

export const intialInventoryState: intialInventoryStateType = {
    inventoryData: [],
    searchQuery: "",
    selectedInventory: "",
    totalCustomers: 0,
    totalProcuts: 0,
    totalSales: 0,
    totalStocks: 0,
    totalVendors: 0,
    totalInventory: 0
};

export const intialCustomerState: intialCustomerStateType = {
    searchQuery: "",
    newAddedCustomers: 0,
    customerData: []
};