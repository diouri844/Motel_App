import BaseFacade from "@/facade/base.facade";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";



class RoomFacade implements BaseFacade {
    path = "/rooms";
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

    // get all rooms : 
    async getRoomList(): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + "/list", {
            headers: {
                page: 1,
                perPage: 100
            }
        }
        );
    }

    // get a single roomm details by id 
    async getRoomById(roomId: string): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + "/item/" + roomId
        );
    }



    // check room availibility :
    async checkRoom(
        hotelId: string,
        roomId: string,
        checkIn: string,
        checkOut: string
    ): Promise<AxiosResponse> {
        return await this.axiosInstance.get(
            this.path + "/availability/" + hotelId, {
            params: {
                roomId,
                checkIn,
                checkOut
            }
        });
    }


}


export default RoomFacade;