import ProductItem from "@/types/Product.type";

export type InitialProductStateType = {
    products: ProductItem & { key: string, value: Object }[];
    searchQuery: string;
};