import ProductFacade from "@/facade/product.facade";
import HooksReturnObject from "@/types/hooksResponse.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";







export const retriveInventoryProductList = (inventoryId: string): HooksReturnObject => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);

    // setup Product facade instance : 
    const ProductMaanager = new ProductFacade();
    useEffect(
        () => {
            const fetchProducts = async () => {
                try {
                    const AipResponse: AxiosResponse = await ProductMaanager.retriveInventoryProductList(inventoryId);
                    console.log(AipResponse);
                    setResponse(AipResponse);
                    setNoData(AipResponse.data.data.length === 0);

                } catch (error) {
                    console.log("Error fetchig inventory product list :  ", error);
                    setError("An error occured while fetchin invetory product list .");
                }
            };
            if (inventoryId) {
                fetchProducts();
            }
        }, [inventoryId]
    );
    return { error, response, noData }
}