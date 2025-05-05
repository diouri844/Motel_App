import OrderStatus from "@/enums/OrderStatus.enum";

export type CreateOrderDto = {
    productId: string;
    customerId: string;
    quantity: number;
    totalPrice: number;
    status?: OrderStatus;
    createdAt?: Date;
};