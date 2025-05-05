// let setup the order api endpoint facade 

import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";
import BaseFacade from "@/facade/base.facade";
import CreateProductDto from "@/types/dto/ProductDto/createProduct.dto";
import UpdateProductDto from "@/types/dto/ProductDto/updateProduct.dto";



class ProductFacade implements BaseFacade {
    path = "/inventory/products/";
    axiosInstance: AxiosInstance = axios.create({ ...axiosConfig });
    constructor() {
        this.axiosInstance.interceptors.request.use(
            config => { return config },
            error => { return Promise.reject(error) }
        );
        this.axiosInstance.interceptors.response.use(
            response => { return response },
            error => { return Promise.reject(error) }
        );
    }
    // ping service test : 
    async pingProductService(): Promise<AxiosResponse> {
        const endpoint: string = "ping"
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // retrive product by given id : 
    async retriveProductById(productId: string): Promise<AxiosResponse> {
        const endpoint: string = "item/";
        return await this.axiosInstance.get(
            this.path + endpoint + productId
        );
    };
    // retrive  product list by stock id :
    async retriveStockProductList(stockId: string): Promise<AxiosResponse> {
        const endpoint: string = "list/";
        return await this.axiosInstance.get(
            this.path + endpoint + stockId
        );
    };
    // retrive  product list by inventory id :
    async retriveInventoryProductList(inventoryId: string): Promise<AxiosResponse> {
        const endpoint: string = "all/";
        return await this.axiosInstance.get(
            this.path + endpoint + inventoryId
        );
    };
    // retrive product list by supplier id : 
    async retriveSupplierProductList(supplierId: string): Promise<AxiosResponse> {
        const endpoint: string = "supllies/";
        return await this.axiosInstance.get(
            this.path + endpoint + supplierId
        );
    };
    // retrive product list by vendor id : 
    async retriveVendorProductList(vendorId: string): Promise<AxiosResponse> {
        const endpoint: string = "vendors/";
        return await this.axiosInstance.get(
            this.path + endpoint + vendorId
        );
    };
    // create new product : 
    async createNewProduct(productPayload: CreateProductDto): Promise<AxiosResponse> {
        const endpoint: string = "new";
        return await this.axiosInstance.post(
            this.path + endpoint,
            productPayload
        );
    };
    // update product by given id : 
    async updateProductById(productId: string, newProductPayload: UpdateProductDto): Promise<AxiosResponse> {
        return await this.axiosInstance.put(
            this.path + productId,
            newProductPayload
        );
    };
    // delete product by given id :
    async deleteProductById(productId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.delete(
            this.path + productId
        );
    };
}


export default ProductFacade;