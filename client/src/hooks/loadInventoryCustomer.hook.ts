import InventoryFacade from "@/facade/inventory.facade";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomerData } from "@/stores/Customer/customer.action";
import { setSelectedInventory, setTotalCustomers } from "@/stores/Inventory/inventory.actions";




export const retriveInventoryCustomerList = (inventoryId: string) => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    if (!inventoryId) return;

    // call inventory facade :
    const inventoryManager = new InventoryFacade();
    useEffect(
        () => {
            const fetchCustomerList = async () => {
                try {
                    const AipResponse: AxiosResponse = await inventoryManager.getInventoryCustomers(inventoryId);
                    setResponse(AipResponse);
                    setNoData(AipResponse.data.data.length === 0);
                    dispatch(setCustomerData(AipResponse.data.data));
                    dispatch(setSelectedInventory(inventoryId));
                    dispatch(setTotalCustomers(AipResponse.data.data.length));
                } catch (error) {
                    console.log("Error fetching inventory customer list : ", error);
                    setError("An error occurred while fetching  inventory customer list.")
                }
            };
            // check if inventory id provided well :
            if (inventoryId) {
                // call load :
                fetchCustomerList();
            }
        }, [inventoryId]
    );
    return { error, response, noData };
};