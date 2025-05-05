
import { SVGProps, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { GiConfirmed } from "react-icons/gi";

import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX } from "react/jsx-runtime";

export default function CreateSaleFromOrderForm() {
    const [selectedOrder, setSelectedOrder] = useState<string>("");
    const [saleDetails, setSaleDetails] = useState({
        quantity: 1,
        price: 0,
    })
    const orders = [
        { id: 1, customer: "John Doe", date: "2023-05-01", total: 100, status: "Fulfilled" },
        { id: 2, customer: "Jane Smith", date: "2023-04-15", total: 75, status: "Declined" },
        { id: 3, customer: "Bob Johnson", date: "2023-03-20", total: 150, status: "Refunded" },
    ]
    const handleOrderSelect = (orderId: string) => {
        const selectedOrder = orders.find((order) => order.id === orderId)
        setSelectedOrder(selectedOrder)
    }
    const handleSaleDetailsChange = (field, value) => {
        setSaleDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New sale:", { selectedOrder, ...saleDetails })
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"secondary"}
                >
                    <GiConfirmed className="h-5 w-5 mx-2" />
                    Add new Sale
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Sale</DialogTitle>
                    <DialogDescription>Create a new sale from an existing customer order.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="order">Select Order</Label>
                        <Select
                            value={selectedOrder}
                            onValueChange={
                                (value) => {
                                    setSelectedOrder(value);
                                }
                            }>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an order" />
                            </SelectTrigger>
                            <SelectContent>
                                {orders.map((order) => (
                                    <SelectItem key={order.id} value={order.id.toString()}
                                        className=" cursor-pointer">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                {order.customer} - {order.date} - Total: ${order.total}
                                            </div>
                                            <div>
                                                {order.status === "Fulfilled" && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        <CheckIcon className="h-3 w-3 mr-1" />
                                                        Fulfilled
                                                    </Badge>
                                                )}
                                                {order.status === "Declined" && (
                                                    <Badge variant="outline" className="text-xs">
                                                        <XIcon className="h-3 w-3 mr-1" />
                                                        Declined
                                                    </Badge>
                                                )}
                                                {order.status === "Refunded" && (
                                                    <Badge variant="outline" className="text-xs">
                                                        <ReceiptIcon className="h-3 w-3 mr-1" />
                                                        Refunded
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {selectedOrder && (
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    value={saleDetails.quantity}
                                    onChange={(e) => handleSaleDetailsChange("quantity", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={saleDetails.price}
                                    onChange={(e) => handleSaleDetailsChange("price", parseFloat(e.target.value))}
                                />
                            </div>
                            <Button
                                variant={"destructive"}
                                type="submit">
                                <GiConfirmed className="h-5 w-5 mx-2" />
                                Confirme Sale
                            </Button>
                        </div>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ReceiptIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}