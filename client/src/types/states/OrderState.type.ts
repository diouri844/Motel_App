import OrderItem from "@/types/Order.type";


export type initialOrderStateType = {
    orders: OrderItem[];
    selectedOrder: OrderItem | null;
    searchQuery: string;
    customerParent: Object;
    inventoryParent: Object;
};