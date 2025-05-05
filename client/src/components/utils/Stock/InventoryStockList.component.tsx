"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import DashbroadLayout from "@/layouts/dashbroad.layout"
import InventoryHeaderComponent from "@/components/utils/Inventory/inventoryHeader.component";
import { useParams } from "react-router-dom"
import StockCardItem from "@/components/utils/Stock/stockCardItem.component"
import { retrieveInventoryStockList } from "@/hooks/loadInventoryStock.hooks"
import { JSX } from "react/jsx-runtime"
import NoDataComponent from "@/components/utils/noData.component";
import CreateStockForm from "@/components/utils/Stock/addStock.component";
import { useSelector } from "react-redux"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { StockStoreType } from "@/types/states/StockState.type"
import LoadingScreen from "@/components/utils/loadData.component";

export default function InventoryStockList() {
    // retrive the inventory id from params : 
    const id: string = useParams().id as string;
    // time to fetch for the inventory : 
    const [noData, setNoData] = useState<boolean>(false);
    const inventoryProp = { id };
    const [searchTerm, setSearchTerm] = useState("")
    retrieveInventoryStockList(id);
    const [dataToDisplay, setDataToDisplay] = useState<StockStoreType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // time to get data from local storage : 
    const stocks: StockStoreType[] = useSelector((state: any) => state.stock.stocks);
    //console.log(stocks);
    useEffect(
        () => {
            setTimeout(
                () => {
                    setLoading(false);
                }, 2500
            );
            setDataToDisplay(stocks);
            setNoData(stocks.length === 0);
        }, [stocks, id]
    );

    return (
        <DashbroadLayout>
            <header>
                <InventoryHeaderComponent {...inventoryProp} />
            </header>
            {
                loading && <LoadingScreen />
            }

            <div className=" bg-transparent flex flex-col gap-6 p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle>Inventory Stocks</CardTitle>
                        <CardDescription>Manage your stock  performance.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search stocks..."
                                className="rounded-lg bg-background pl-8 w-[200px] md:w-[300px]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <CreateStockForm  {...inventoryProp} />
                    </div>
                </div>
            </div>
            {
                noData ? (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <NoDataComponent {...{
                            message: "No stocks found.",
                            description: "To create a new stock please press the quick action button at the bottom 👇 "
                        }} />
                        <CreateStockForm  {...inventoryProp} />
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {dataToDisplay.map((stock: JSX.IntrinsicAttributes & StockStoreType) => (
                            <StockCardItem {...stock} />
                        ))}
                    </div>
                )
            }
        </DashbroadLayout >

    )
}