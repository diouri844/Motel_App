import axios, { AxiosInstance, AxiosResponse } from "axios";
import BaseFacade from "@/facade/base.facade";
import { axiosConfig } from "@/axios.setup";
import { CreateCustomerDto } from "@/types/dto/CustomerDto/createCustomer.dto";
import { UpdateCustomerDto } from "@/types/dto/CustomerDto/updateCustomer.dto";


class CustomerFacade implements BaseFacade {
    path = "/inventory/customers/";
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
    // ping 
    async pingCustomerService(): Promise<AxiosResponse> {
        const endpoint: string = "ping";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // retrive info by id :
    async getSingleCustomerById(customerId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + customerId
        );
    };
    // retrive a customer list for a given inventory id :
    async getCustomerListByInventoryId(inventoryId: string): Promise<AxiosResponse> {
        const endpoint: string = "list/";
        return await this.axiosInstance.get(
            this.path + endpoint + inventoryId
        );
    };
    // create new customer :
    async createNewCustomer(newCustomerPayload: CreateCustomerDto): Promise<AxiosResponse> {
        const endpoint: string = "new";
        return await this.axiosInstance.post(
            this.path + endpoint,
            newCustomerPayload
        );
    };
    // update exesting customer information by given id :
    async editCustomerById(customerId: string, updatedCustomerPayload: UpdateCustomerDto): Promise<AxiosResponse> {
        return await this.axiosInstance.put(
            this.path + customerId,
            updatedCustomerPayload
        );
    };
    // delete customer information by id :
    async removeCustomerById(customerId: string): Promise<AxiosResponse> {
        return this.axiosInstance.delete(
            this.path + customerId
        );
    };
}




export default CustomerFacade;