import OrderStatus from "@/enums/OrderStatus.enum";

export type UpdateOrderDto = {
    status?: OrderStatus;
    quantity?: number;
    totalPrice?: number;
};