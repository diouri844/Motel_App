"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import DashbroadLayout from "@/layouts/dashbroad.layout"
import InventoryHeaderComponent from "../Inventory/inventoryHeader.component"
import { useParams } from "react-router-dom"
import CreateNewproductComponent from "@/components/utils/Poduct/addproduct.component";
import ProductTableComponent from "@/components/utils/Poduct/productTable.component";
import NoDataComponent from "../noData.component"
import ProductItem from "@/types/Product.type"
import { useState } from "react"
import { retriveInventoryProductList } from "@/hooks/loadInventoryProduct.hook"
import { useSelector } from "react-redux"
import { retrieveInventoryStockList } from "@/hooks/loadInventoryStock.hooks"
import { Button } from "@/components/ui/button"
import { StockStoreType } from "@/types/states/StockState.type"



export default function InventoryProductPage() {
    const id: string = useParams().id as string;
    const [searchTerm, setSearchTerm] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState<ProductItem[]>([]);

    const inventoryProp = {
        id
    };
    retrieveInventoryStockList(id);
    retriveInventoryProductList(id);
    // ftech product from local storage :
    const products: ProductItem[] = useSelector((state: any) => state.product.products);
    // fetch stocks from local storage : 
    const stockList: StockStoreType[] = useSelector((state: any) => state.stock.stocks);

    const handleSeachChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        // set value : 
        setSearchTerm(event.target.value);
        // check if is cleared : 
        if (event.target.value === "") {
            // cleare filter : 
            setDataToDisplay(products);
            return;
        }
        return;
    }
    const handleSearch = (event: React.KeyboardEvent) => {
        // console.log(event);
        const keyTarget = event.nativeEvent.code;
        if (keyTarget === "Enter") {
            const result: ProductItem[] = products.filter(
                (item: { name: string }) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ||
                    item.name.toLowerCase() === searchTerm.toLowerCase()
            );
            //console.log(result);
            setDataToDisplay(result);
            return;
        }
        return;
    };

    return (
        <DashbroadLayout>
            <header>
                <InventoryHeaderComponent {...inventoryProp} />
            </header>
            <Card className=" bg-transparent my-[3%] mx-[1%] border-none shadow-none">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <CardTitle>Product Inventory</CardTitle>
                            <CardDescription>Manage your product inventory and sales performance.</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    value={searchTerm}
                                    onChange={handleSeachChange}
                                    onKeyDown={handleSearch}
                                    type="search" placeholder="Search products..." className="pl-8 w-[200px] md:w-[300px]" />
                            </div>
                            <CreateNewproductComponent
                                {
                                ... {
                                    children: <Button variant={"default"}>Create New</Button>,
                                    inventory: inventoryProp,
                                    availableStocks: stockList
                                }
                                }
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>

                    {products.length > 0 ? (
                        <ProductTableComponent products={products} />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-4">
                            <NoDataComponent  {... {
                                message: "No Product in this stock Yet",
                                description: "To create a new product please press the quick action button at the bottom 👇 "
                            }} />
                            <CreateNewproductComponent {...{
                                children: <Button variant={"default"}>Create New</Button>,
                                inventory: inventoryProp,
                                availableStocks: stockList
                            }} />
                        </div>
                    )
                    }
                </CardContent>
            </Card>
        </DashbroadLayout>
    )
}