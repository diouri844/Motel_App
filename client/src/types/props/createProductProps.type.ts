import React from "react";
import { StockStoreType } from "../states/StockState.type";

export type CreateProductComponentProps = {
    children: React.ReactNode;
    inventory: { id: string };
    availableStocks: StockStoreType[];
}