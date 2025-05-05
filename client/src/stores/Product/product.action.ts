import * as ProductActionType from "@/stores/Product/productAction.type";
import UpdateProductDto from "@/types/dto/ProductDto/updateProduct.dto";
import ProductItem from "@/types/Product.type";




export const setProductData = (data: ProductItem[]) => ({
    type: ProductActionType.SET_PRODUCT_DATA,
    payload: data
});

export const getProductData = () => ({
    type: ProductActionType.GET_PRODUCT_DATA
});


export const setSearchQuery = (query: string) => ({
    type: ProductActionType.SET_SEARCH_QUERY,
    payload: query
});


export const clearSearchQuery = () => ({
    type: ProductActionType.CLEAR_SEARCH_QUERY
});


export const addProduct = (data: ProductItem) => ({
    type: ProductActionType.ADD_PRODUCT,
    payload: data
});


export const editProduct = (
    // product Id :
    target: string,
    // new Product Payload: 
    data: UpdateProductDto
) => ({
    type: ProductActionType.EDIT_PRODUCT,
    payload: { data, target }
});
