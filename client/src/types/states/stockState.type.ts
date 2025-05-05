import ProductItem from "@/types/Product.type";
import StockItem from "@/types/Stock.type";


export type StockStoreType = {
    stockDetails: StockItem;
    products: ProductItem[];
    counts: number;
};



export type initialStockStateType = {
    stocks: StockStoreType[];
    searchQuery: string;
};