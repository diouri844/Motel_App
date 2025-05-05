import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setInventoryData } from "@/stores/Inventory/inventory.actions";
import InventoryFacade from "@/facade/inventory.facade";

export const retriveUserInventoryList = (userProfileId: string) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const inventoryManager = new InventoryFacade();
    useEffect(
        () => {
            const fetchInventoryList = async () => {
                try {
                    console.log(userProfileId);
                    const response = await inventoryManager.getInventoryByProfileId(userProfileId);
                    setIsLoading(false);
                    dispatch(
                        setInventoryData(response.data.data)
                    );
                    setResponse(response);
                } catch (error) {
                    console.error('Error fetching profile inventory list  :', error);
                    setError('An error occurred while fetching  profile inventory list.');
                }
            };
            if (userProfileId) {
                fetchInventoryList();
            }
        }, [userProfileId, dispatch]
    );
    return { isLoading, error, response };
};