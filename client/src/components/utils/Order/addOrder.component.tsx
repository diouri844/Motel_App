import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";




import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import CustomerItem from "@/types/Customer.type";

const CreateOrderForm: React.FC<CustomerItem> = (props: CustomerItem) => {
    const [productRef, setProductRef] = useState("")
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [orderStatus, setOrderStatus] = useState("Pending")
    const [totalPrice, setTotalPrice] = useState(0)
    const productPrice = 49.99;
    const products = [
        { id: 1, name: "Product A", price: 49.99, image: "https://th.bing.com/th/id/OIP.XJxsJGSXyvSUU2rq4_0rWwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { id: 2, name: "Product B", price: 59.99, image: "data:image/jpeg;base64,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9KpVCNO+iIaLdS1KTdvrBpOWhrjuLe784yAvvQNK1abV4rbampNbp8E8oe+GzTPjSDwmhjnhu7GSXNDhkDk+RmL1HVLmpapcZoVq5Bev16VuOerBF42k6fAwODPa3AjxpSXtI94bByO6m4MMUrHlBz5Ou8yjKunflH1FraFi9ovUWizSMjul16vaijY7P5wTNa2w14GSwjJz5Hsej2LOm9NaKx88hFTTakVaHxXDxZjFGI44hwAXuwBwFRKPTes1pq1qh0/PpFwG2+SSC8yWuGsLpIGmJ9zc4nDWkObtycngYMbP0n+UXUnNk1Cn4sgyQ6/rEc23PfaGtcB8sLvpHa3T0Fn+zVJrmj2fVurK8djfjaG1jHIPDLJWPB9x273TwOC3uoiplmpa1IxzntfaeGvc58jnNbI/BL3kuOfUk/auh1+m+pK2n9P0q1LS2nTm25p3Wr022S7Ox7BI1sEJJaN7+5BOR2286tL8n+vxNzLqukxPed0ng0J7B3fB00zc/wC1R745tafGv5d8WSKalXhNO4dj8mp+eJztcfkFdWdEagAA/qAj18DS6jP53OKzt6IZ/ma7q59fCbRhz/shytPp3eeUoZ9p8mOKitTbckNKBsM7gbEdmYwxTSlkUZLQ5zYmk4JJA48vguqjofSD/iajr0nrnUHMH4RNapnSdE0vRY5o6TJd072vnlsTyzzSlow0OklJOB5Dtz8ed64YiduduRMxqHHoa+pCjbjgpavNJds12ubX0e+5wggBeC2R7GtwSeR8PJWn8n+lR23XtVt05PDryOqaf7bCWu34/PSBj/k3z810pMKRMb0ixaY3+r4ZHFGMMYxo9Gta3+C+0RGBERAREQEREBERAREQEREBERAREQFzzq38nFPVWWLmi+HUvuIkfXPu1LDhnO3A9xx+HB9B3XQ0KD85vrXKV7TdIv1H0bNdkr5mzlgBLmFrHMcCWlvfnK2fo2s0gmat+1LGP4ld0v6Nomq+EdS06nbMWREbMLJHMB7hpcM4Wm3pLo1hBboGkZHrUhd/MFnY4l4Ojsc5r7tMOBOR48Zxj7pKyV26PLNAyKxBJ74dIQHFrWM99znOxgdvVd3i0nRYQBDpmnxgdhHVgaB9m1q2fBgDSzwoth7t2N2nHwxhJlmJ0r3SWkR0qRvywhl3UiJ3lzcSR1sAQw88jj3iPVx9FZfmiLWI1GiZ3O5ERFlgREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z" },
        { id: 3, name: "Product C", price: 69.99, image: "https://th.bing.com/th/id/OIP.-yNP23AmtNKaxfQy73naOwHaFD?w=262&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { id: 4, name: "Product D", price: 79.99, image: "https://th.bing.com/th/id/OIP.w7ujDDnEtvL647lDnvEpVwAAAA?w=298&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
    ];


    useEffect(() => {
        if (selectedProduct) {
            setTotalPrice(quantity * selectedProduct.price)
        } else {
            setTotalPrice(0)
        }
    }, [quantity, productPrice])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            customerRef,
            productRef,
            quantity,
            orderStatus,
            totalPrice,
        })
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                >
                    <MdAddShoppingCart className="h-5 w-5 mx-2" />
                    Add new Order
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Place Order</DialogTitle>
                    <DialogDescription>Fill out the form to place your order.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="customerRef">Customer Reference</Label>
                            <Input
                                id="customerRef"
                                className=" cursor-not-allowed"
                                value={props.id}
                                placeholder="Enter customer reference"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="productRef">Product Reference</Label>
                            <Select
                                value={productRef}
                                onValueChange={(value) => {
                                    setProductRef(value)
                                    setSelectedProduct(products.find((p) => p.id.toString() === value))
                                }}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a product" />
                                </SelectTrigger>
                                <SelectContent>
                                    {products.map((product) => (
                                        <SelectItem
                                            className=" cursor-pointer"
                                            key={product.id} value={product.id.toString()}>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    {product.name} - ${product.price.toFixed(2)}
                                                </div>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                id="quantity"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                min={1}
                                placeholder="Enter quantity"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="orderStatus">Order Status</Label>
                            <Select value={orderStatus} onValueChange={setOrderStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select order status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Pending">Pending</SelectItem>
                                    <SelectItem value="Processing">Processing</SelectItem>
                                    <SelectItem value="Completed">Completed</SelectItem>
                                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="totalPrice">Total Price</Label>
                        <Input id="totalPrice" value={totalPrice.toFixed(2)} readOnly className="bg-muted" />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        variant={"destructive"}
                    >
                        <MdAddShoppingCart className="h-5 w-5 mx-2" />
                        Place Order
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
};


export default CreateOrderForm;