import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import CustomerItem from "@/types/Customer.type";
import { useEffect } from "react";
import OrderFacade from "@/facade/order.facade";
import CreateOrderForm from "@/components/utils/Order/addOrder.component";
import CreateSaleFromOrderForm from "@/components/utils/Sale/addSale.component";

const CustomerDetailsCard: React.FC<CustomerItem> = (props: CustomerItem) => {
    useEffect(
        () => {
            const ping = async () => {
                const OrderManager = new OrderFacade();
                const result = await OrderManager.pingOrderService();
                console.log(result);
            };
            ping();
        }
    )
    return (
        <Card className="bg-transparent shadow-none border-l-4
                            border-r-0
                            border-t-0
                            border-b-0
                            rounded-sm
                            border-[#dbeaf2]">
            <CardHeader>
                <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-1">
                    <div className="font-medium">{props.lastName} {props.firstName}</div>
                    <div className="text-muted-foreground">{props.email} | {props.phoneNumber}</div>
                </div>
                <div className="grid gap-1">
                    <div className="font-medium">inventory ref :</div>
                    <a className="text-green-500 font-medium cursor-pointer"
                        href={"/my-inventory/details/" + props.inventoryId}
                    >
                        {props.inventoryId}
                    </a>
                </div>
                <div className="grid gap-1">
                    <div className="font-medium">{props.city} , {props.postalCode}</div>
                    <div className="text-muted-foreground">{props.createdAt}</div>
                </div>
                <div className="flex flex-row gap-2">
                    <CreateOrderForm  {...props} />
                    <CreateSaleFromOrderForm />
                </div>
            </CardContent>
        </Card>
    );
}


export default CustomerDetailsCard;