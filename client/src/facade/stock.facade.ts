import BaseFacade from "@/facade/base.facade";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";
import CreateStockDto from "@/types/dto/StockDto/createStock.dto";
import UpdateStockDto from "@/types/dto/StockDto/updateStock.dto";




class StockFacade implements BaseFacade {
    path = "/inventory/stock/";
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
    };
    // ping inventory stock subService : 
    async pingStockService(): Promise<AxiosResponse> {
        const endpoint: string = "ping";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // retrive a stock details by id : 
    async retriveStockById(stockId: string): Promise<AxiosResponse> {
        const endpoint: string = "item/";
        return await this.axiosInstance.get(
            this.path + endpoint + stockId
        );
    };
    // retrive all stock list for a given inventory id : 
    async retriveInventoryStockList(inventoryId: string): Promise<AxiosResponse> {
        const endpoint: string = "all/";
        return await this.axiosInstance.get(
            this.path + endpoint + inventoryId
        );
    };
    // retrive all product for a given stock id : 
    async retriveStockProductList(stockId: string): Promise<AxiosResponse> {
        const endpoint: string = "products/";
        return await this.axiosInstance.get(
            this.path + endpoint + stockId
        );
    };
    // create new Stock :
    async createNewStock(stockPayload: CreateStockDto): Promise<AxiosResponse> {
        const endpoint: string = "new/";
        return await this.axiosInstance.post(
            this.path + endpoint + stockPayload.inventoryId,
            stockPayload
        );
    };
    // update exesting Stock info by id :
    async updateStockById(stockId: string, newStockPayload: UpdateStockDto): Promise<AxiosResponse> {
        return await this.axiosInstance.put(
            this.path + stockId,
            newStockPayload
        );
    };
    // delete stock by given id : 
    async deleteStockById(stockId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.delete(
            this.path + stockId
        );
    }
}

export default StockFacade;