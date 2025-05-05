// let setup order facade api intercations

import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";
import BaseFacade from "@/facade/base.facade";
import { CreateOrderDto } from "@/types/dto/OrderDto/createOrder.dto";
import { UpdateOrderDto } from "@/types/dto/OrderDto/updateOrder,dto";




class OrderFacade implements BaseFacade {
    path = "/inventory/orders/";
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
    // ping test method : 
    async pingOrderService(): Promise<AxiosResponse> {
        const endpoint: string = "ping";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    //retrive order list for a given customer id :
    async retriveCustomerOrderList(customerId: string): Promise<AxiosResponse> {
        const endpoint: string = "/customer/" + customerId + "/list";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // retrive order infromation by id :
    async retriveOrderById(orderId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + orderId
        );
    };
    // retrive order list for a  given product id :
    async retriveProductOrderList(productId: string): Promise<AxiosResponse> {
        const endpoint: string = "/product/" + productId + "/list";
        return await this.axiosInstance.get(
            this.path + endpoint
        );
    };
    // create new order :
    async createNewOrder(orderPayload: CreateOrderDto): Promise<AxiosResponse> {
        const endpoint: string = "/new";
        return await this.axiosInstance.post(
            this.path + endpoint,
            orderPayload
        );
    };
    // update exesting order information :
    async editOrder(orderId: string, newOrderPayload: UpdateOrderDto): Promise<AxiosResponse> {
        return await this.axiosInstance.put(
            this.path + orderId,
            newOrderPayload
        );
    };
    // delete exesting order : 
    async removeOrder(orderId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.delete(
            this.path + orderId
        );
    };
}

export default OrderFacade;