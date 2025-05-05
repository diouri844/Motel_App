import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ProductFacade from "@/facade/product.facade";
import CreateProductDto from "@/types/dto/ProductDto/createProduct.dto";
import { AxiosResponse } from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

import { GiConfirmed } from "react-icons/gi";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
//import StockItem from "@/types/Stock.type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/stores/Product/product.action";
import { CreateProductComponentProps } from "@/types/props/createProductProps.type";
import { StockStoreType } from "@/types/states/StockState.type";






const CreateNewproductComponent: React.FC<CreateProductComponentProps> = (props: CreateProductComponentProps) => {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const stocksList: StockStoreType[] = props.availableStocks;
    console.log(stocksList);
    const [selectedStockId, setSelectedStockId] = useState<string>("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            stockId: "",
            inventoryId: props.inventory.id,
            vendorId: "",
            supplierId: "",
            // Add any other default values for missing props
            name: "",
            description: "",
            price: 0,
            quantity: 1,
            createdAt: "",
        },
    });
    const productManager = new ProductFacade();


    const handleCreateProduct = (data: any): void => {
        // time to send request using the facade : 
        const strPrice: string = data.price;
        const strQuantity: string = data.quantity;
        const price: number = parseFloat(strPrice);
        const quantity: number = parseFloat(strQuantity);
        // check if a vendor or a supplier provided : 
        if (data.vendorId === "") {
            // set to null : 
            data.vendorId = null;
        }
        if (data.supplierId === "") {
            data.supplierId = null;
        }
        // update data : 
        data.stockId = selectedStockId;
        data.price = price;
        data.quantity = quantity;
        productManager.createNewProduct(
            data as CreateProductDto
        ).then(
            (response: AxiosResponse) => {
                const { data, status } = response;
                // chck status :
                if (status === 200) {
                    // all is great : 
                    toast({
                        title: data.message
                    });
                    // time to refresh the ui : 
                    dispatch(
                        addProduct(data.data)
                    );
                    return;
                }
                toast({
                    title: "Error : " + data.message,
                    variant: "destructive"
                });
                return;
            }
        ).catch(error => {
            console.log(" Error Creating new Product  : ", error);
            toast({
                title: "Error : " + error.response.data.message,
                variant: "destructive"
            });
            return;
        });
    };


    const handleSelectChange = (event: string): void => {
        setSelectedStockId(event);
        return;
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                {props.children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] space-y-4">
                <DialogHeader>
                    <DialogTitle>Add product</DialogTitle>
                    <DialogDescription>
                        Create new Product. Click create when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={
                    handleSubmit(handleCreateProduct)}
                    className="grid gap-4 py-4 space-y-5">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="stockId">StockId*</Label>
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select an stock " />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        stocksList.length > 0 ? (
                                            stocksList.map((stock: StockStoreType) => (
                                                <SelectItem
                                                    className=" cursor-pointer hover:bg-stone-200 
                                                     rounded-sm
                                                    transition-colors duration-200"
                                                    value={stock.stockDetails.id} key={stock.stockDetails.id}>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            {stock.stockDetails.name}
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <div className="flex items-center justify-between text-sm">
                                                this inventory has no stock yet
                                            </div>
                                        )
                                    }
                                </SelectContent>
                            </Select>
                            {errors.stockId &&
                                <span className="text-red-500 text-sm opacity-75">{errors.stockId.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inventoryId">InventoryId*</Label>
                            <Input
                                {...register('inventoryId',
                                    { required: "inventoryId is required" }
                                )}
                                readOnly
                                id="inventoryId"
                                placeholder="inventory-Id"
                                className=" cursor-not-allowed"
                            />
                            {errors.inventoryId &&
                                <span className="text-red-500 text-sm opacity-75">{errors.inventoryId.message}</span>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="vendorId">VendorId</Label>
                            <Input
                                {...register('vendorId')}
                                id="vendorId" placeholder="vendor-Id" />
                            {errors.vendorId &&
                                <span className="text-red-500 text-sm opacity-75">{errors.vendorId.message}</span>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="supplierId">SupplierId</Label>
                            <Input
                                {...register('supplierId')}
                                id="supplierId" placeholder="supplier-Id" />
                            {errors.supplierId &&
                                <span className="text-red-500 text-sm opacity-75">{errors.supplierId.message}</span>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Name*</Label>
                            <Input
                                {...register('name',
                                    { required: "product name is required" }
                                )}
                                id="name" placeholder="Product Name"
                            />
                            {errors.name &&
                                <span className="text-red-500 text-sm opacity-75">{errors.name.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                {...register('description')}
                                id="description" placeholder="Product description"
                            />
                            {errors.description &&
                                <span className="text-red-500 text-sm opacity-75">{errors.description.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price">Price* (MAD)</Label>
                            <Input
                                {...register('price',
                                    { required: "Product price is required", min: 1 }

                                )}
                                id="price" placeholder="Product price MAD"
                                type="number"
                            />
                            {errors.price &&
                                <span className="text-red-500 text-sm opacity-75">{errors.price.message}</span>
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity*</Label>
                            <Input
                                {...register('quantity'
                                    , { required: "Product Quantity is required", min: 1 }
                                )}
                                id="quantity" placeholder="Product available quantity"
                                type="number"
                            />
                            {errors.quantity &&
                                <span className="text-red-500 text-sm opacity-75">{errors.quantity.message}</span>
                            }
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant={"outline"}
                            type="submit">
                            <GiConfirmed className="mx-2 w-4 h-4" /> Create Product
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}



export default CreateNewproductComponent;