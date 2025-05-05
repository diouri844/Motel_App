import InventoryFacade from "@/facade/inventory.facade";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export const retriveInventorySalesList = (inventoryId: string) => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    if (!inventoryId) return;
    const inventoryManager = new InventoryFacade();
    // time to fetch data : 
    useEffect(
        () => {
            const fetchInventorySaleList = async () => {
                try {
                    const AipResponse: AxiosResponse = await inventoryManager.getInventoryVendors(inventoryId);
                    console.log(AipResponse);
                    setResponse(AipResponse);
                    setNoData(AipResponse.data.data.length === 0);
                } catch (error) {
                    console.log("Error fetchig inventory Vendor list :  ", error);
                    setError("An error occured while fetchin invetory vendor list .");
                }
            };
            if (inventoryId) {
                fetchInventorySaleList();
            }
        }, [inventoryId]
    );
    return { error, response, noData }
};