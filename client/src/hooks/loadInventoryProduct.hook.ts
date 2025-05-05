import InventoryFacade from "@/facade/inventory.facade";
import { setProductData } from "@/stores/Product/product.action";
import HooksReturnObject from "@/types/hooksResponse.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";





export const retriveInventoryProductList = (inventoryId: string): HooksReturnObject | null => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    const dispatch = useDispatch();
    if (!inventoryId) return null;

    // setup facade instance :
    const inventoryManager = new InventoryFacade();
    // time to fetch : 
    useEffect(
        () => {
            const fetchProductList = async () => {
                try {
                    const AipResponse: AxiosResponse = await inventoryManager.getInventoryProducts(inventoryId);
                    //console.log(AipResponse);
                    setResponse(AipResponse);
                    dispatch(
                        setProductData(AipResponse.data.data)
                    );
                    setNoData(AipResponse.data.data.length === 0);
                } catch (error) {
                    console.log("Error fetchig inventory Product list :  ", error);
                    setError("An error occured while fetchin invetory product list .");
                }
            };
            if (inventoryId) {
                fetchProductList();
            }
        }, [inventoryId]
    );
    return { error, response, noData }
}