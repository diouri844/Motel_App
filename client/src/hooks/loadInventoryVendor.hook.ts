import InventoryFacade from "@/facade/inventory.facade";
import HooksReturnObject from "@/types/hooksResponse.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


export const retriveInventoryVendorList = (inventoryId: string): HooksReturnObject => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    // setup facade instance : 
    const inventoryManager = new InventoryFacade();
    // time to fetch data : 
    useEffect(
        () => {
            const fetchVendorList = async () => {
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
                fetchVendorList();
            }
        }, [inventoryId]
    );
    return { error, response, noData }
}