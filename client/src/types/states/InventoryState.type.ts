import InventoryItem from "@/types/inventory.type";

export type intialInventoryStateType = {
    inventoryData: InventoryItem[];
    searchQuery: string;
    selectedInventory: string | null;
    totalCustomers: number;
    totalProcuts: number;
    totalSales: number;
    totalStocks: number;
    totalVendors: number;
    totalInventory: number;
}