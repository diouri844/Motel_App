import InventoryFacade from "@/facade/inventory.facade";
import { setStockData } from "@/stores/Stock/stock.action";
import HooksReturnObject from "@/types/hooksResponse.type";
import { StockStoreType } from "@/types/states/StockState.type";
import StockItem from "@/types/Stock.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductItem from "@/types/Product.type";
import StockFacade from "@/facade/stock.facade";


export const retrieveInventoryStockList = (inventoryId: string): HooksReturnObject => {
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    const inventoryManager = new InventoryFacade();
    const stockManager = new StockFacade();

    useEffect(() => {
        const fetchStockList = async () => {
            try {
                const AipResponse: AxiosResponse = await inventoryManager.getInventoryStocks(inventoryId);
                setResponse(AipResponse);

                if (!AipResponse.data.data) {
                    setNoData(true);
                    return; // Early return if no data in initial response
                }

                const stockDetailsList: StockItem[] = AipResponse.data.data;
                const productPromises = stockDetailsList.map(async (stock) => {
                    const StockApiResponse: AxiosResponse = await stockManager.retriveStockProductList(stock.id);
                    return StockApiResponse.data.data; // Return the product list
                });

                const productLists: ProductItem[][] = await Promise.all(productPromises);
                const StockStoreList: StockStoreType[] = stockDetailsList.map((stock, index) => ({
                    stockDetails: stock,
                    products: productLists[index],
                    counts: productLists[index].length > 0 ? productLists[index].length : 0,
                }));

                dispatch(setStockData(StockStoreList));
                setNoData(StockStoreList.length === 0); // Check for empty StockStoreList
            } catch (error) {
                console.error("Error fetching inventory Stock list:", error);
                setError("An error occurred while fetching inventory stock list.");
            }
        };

        if (inventoryId) {
            fetchStockList();
        }
    }, [inventoryId]);

    return { error, response, noData };
};