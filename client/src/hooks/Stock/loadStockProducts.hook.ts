// let setup the hooks : 

import StockFacade from "@/facade/stock.facade";
import HooksReturnObject from "@/types/hooksResponse.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";



export const retriveStockProductList = (stockId: string): HooksReturnObject => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    //const dispatch = useDispatch();
    const stockManager = new StockFacade();

    useEffect(
        () => {
            const fetchProducts = async () => {
                try {
                    const AipResponse: AxiosResponse = await stockManager.retriveStockProductList(stockId);
                    console.log(AipResponse);
                    setResponse(AipResponse);
                    setNoData(AipResponse.data.data.length === 0);
                } catch (error) {
                    console.log("Error fetchig stock product list :  ", error);
                    setError("An error occured while fetchin stock product list .");
                }
            }
            if (stockId) {
                fetchProducts();
            }
        },
        [stockId]
    );
    return { error, response, noData };
};