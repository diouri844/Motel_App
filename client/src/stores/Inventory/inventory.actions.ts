import * as InventoryAction from "@/stores/Inventory/inventoryActions.type";




export const setInventoryData = (data: any[]) => ({
    type: InventoryAction.SET_INVENTORY_DATA,
    payload: data
});

export const getInventoryList = () => ({
    type: InventoryAction.GET_INVENTORY_DATA
});


export const setSearchQuery = (query: string) => ({
    type: InventoryAction.SET_SEARCH_QUERY,
    payload: query
});

export const clearSearchQuery = () => ({
    type: InventoryAction.CLEAR_SEARCH_QUERY
});


export const setSelectedInventory = (payload: string) => ({
    type: InventoryAction.SET_SELECTED_INVENTORY,
    payload
});

export const getSelectedInventory = () => ({
    type: InventoryAction.GET_SELECTED_INVENTORY
})

export const clearSelectedInventory = () => ({
    type: InventoryAction.CLEAR_SELECTED_INVENTORY
})

export const setTotalCustomers = (total: number) => ({
    type: InventoryAction.SET_TOTAL_CUSTOMERS,
    payload: total
});

export const setTotalProducts = (total: number) => ({
    type: InventoryAction.SET_TOTAL_PRODUCTS,
    payload: total
});

export const setTotalSales = (total: number) => ({
    type: InventoryAction.SET_TOTAL_SALES,
    payload: total
});

export const setTotalStocks = (total: number) => ({
    type: InventoryAction.SET_TOTAL_STOCKS,
    payload: total
});

export const setTotalVendors = (total: number) => ({
    type: InventoryAction.SET_TOTAL_VENDORS,
    payload: total
});

export const setTotalInventory = (total: number) => ({
    type: InventoryAction.SET_TOTAL_INVENTORY,
    payload: total
});


export const AddInventory = (payload: any) => ({
    type: InventoryAction.ADD_INVENTORY,
    payload
});


export const UpdateInventory = (inventoryId: string, payload: any) => (
    {
        type: InventoryAction.UPDATE_INVENTORY,
        payload: { ...payload, inventoryId }
    }
);

export const AddCustomer = (inventoryId: string, cusomerPayload: any) => ({
    type: InventoryAction.ADD_CUSTOMER_DB,
    payload: { ...cusomerPayload, inventoryId }
});


export const AddProduct = (inventoryId: string, productPayload: any) => ({
    type: InventoryAction.ADD_PRODUCT_DB,
    payload: { ...productPayload, inventoryId }
});


export const AddSale = (inventoryId: string, salePayload: any) => ({
    type: InventoryAction.ADD_SALE_DB,
    payload: { ...salePayload, inventoryId }
});

export const AddStock = (inventoryId: string, stockPayload: any) => ({
    type: InventoryAction.ADD_STOCK_DB,
    payload: { ...stockPayload, inventoryId }
});


export const AddVendor = (inventoryId: string, vendorPayload: any) => ({
    type: InventoryAction.ADD_VENDOR_DB,
    payload: { ...vendorPayload, inventoryId }
});


export const AddSupplier = (inventoryId: string, supplierPayload: any) => ({
    type: InventoryAction.ADD_SUPPLIER_DB,
    payload: { ...supplierPayload, inventoryId }
});

export const RemoveInventory = (inventoryId: string) => (
    {
        type: InventoryAction.REMOVE_INVENTORY,
        payload: inventoryId
    }
);




