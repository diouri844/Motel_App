import OrderStatus from "@/enums/OrderStatus.enum";


type OrderItem = {
    id: String;
    productId: String; // ID of the product ordered
    customerId: String; // ID of the customer who placed the order
    quantity: Number; // Quantity of the product ordered
    totalPrice: Number; // Total price of the order
    status: OrderStatus;
    createdAt: Date

};
export default OrderItem;