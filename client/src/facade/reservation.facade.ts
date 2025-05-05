import BaseFacade from "@/facade/base.facade";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";
import { reservationType } from "@/types/reservation.type";


class ReservationFacade implements BaseFacade {
    path = "/reservations";
    axiosInstance: AxiosInstance = axios.create({
        ...axiosConfig
    });

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
    // immplement the get all reservation :
    async getReservationList(): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + "/list"
        )
    };
    // get reservation by given id :
    async getReservationById(reservationId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + "/item/" + reservationId
        );
    };
    // remove reservation by given id : 
    async removeReservationById(reservationId: string): Promise<AxiosInstance> {
        return await this.axiosInstance.delete(
            this.path + "/item/" + reservationId
        );
    }

    // add new reservation : 
    async addNewReservation(payload: reservationType): Promise<AxiosResponse> {
        return await this.axiosInstance.post(
            this.path + "/create", payload
        );
    }
}




export default ReservationFacade;