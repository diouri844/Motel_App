import axios, { AxiosInstance, AxiosResponse } from "axios";
import BaseFacade from "@/facade/base.facade";
import { axiosConfig } from "@/axios.setup";
import InventoryItemSummary from "@/types/EditInventory.type";


//immplmemt the inventory facade api manager :


class InventoryFacade implements BaseFacade {
    path = "/inventory/";
    axiosInstance: AxiosInstance = axios.create({ ...axiosConfig });
    // setup the constructor :
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
    //ping 
    async pingInventoryService(): Promise<AxiosResponse> {
        const endpoint: string = "ping";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // get current user profile inventory list :
    async getProfileInventoryList(
        profileId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "me";
        return await this.axiosInstance.get(
            this.path + endpoint,
            {
                headers: {
                    "x-autPorifileId": profileId
                }
            }
        );
    }
    // get inventory by given profile id :
    async getInventoryByProfileId(
        profileId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "profile";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + profileId
        );
    };
    // get inventory information by given id :
    async getInventoryDetailsById(
        endpoint: string = "",
        inventoryId: string
    ): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + endpoint + inventoryId
        );
    };
    // retrive inventory customers by inventory id :
    async getInventoryCustomers(
        inventoryId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "item/customers";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + inventoryId
        );
    };
    // retrive inventory sales by inventory id :
    async getInventorySales(
        inventoryId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "item/sales";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + inventoryId
        );
    };
    // retrive inventory products by inventory id :
    async getInventoryProducts(
        inventoryId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "item/products";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + inventoryId
        );
    };
    // retrive inventory stocks by inventory id :
    async getInventoryStocks(
        inventoryId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "item/stocks";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + inventoryId
        );
    };
    // retrive inventory vendors by inventory id : 
    async getInventoryVendors(
        inventoryId: string
    ): Promise<AxiosResponse> {
        // to immplment later : 
        const endpoint: string = "item/vendors";
        return await this.axiosInstance.get(
            this.path + endpoint + "/" + inventoryId
        );
    }
    // create new inventory :
    async createInventory(
        profileId: string,
        inventoryPayload: any
    ): Promise<AxiosResponse> {
        const endpoint: string = "new";
        return await this.axiosInstance.post(
            this.path + endpoint + "/" + profileId,
            inventoryPayload
        );
    };
    // update inventory details : name and descriptions : 
    async editInventoryDetails(
        inventoryId: string,
        inventoryPayload: InventoryItemSummary
    ): Promise<AxiosResponse> {
        return await this.axiosInstance.put(
            this.path + inventoryId,
            inventoryPayload
        );
    };
    // delete exesting inventory by id :
    async removeInventory(
        inventoryId: string
    ): Promise<AxiosResponse> {
        return await this.axiosInstance.delete(
            this.path + "/" + inventoryId
        );
    };
};


export default InventoryFacade;