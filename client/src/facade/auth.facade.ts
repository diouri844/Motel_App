
//import { useAxios } from "@/context/axios.context";
import BaseFacade from "@/facade/base.facade";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { axiosConfig } from "@/axios.setup";





class AuthFacade implements BaseFacade {
    path = "/auth/";
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

    // ping auth service :
    async pingAuthService(
    ): Promise<AxiosResponse> {
        const enpoint: string = "Ping";
        return await this.axiosInstance.get(
            this.path + enpoint
        );
    };
    // collect user profile data :
    async collectUserInfo(
        authProfileId: string
    ): Promise<AxiosResponse> {
        const endpoint: string = "profile/";
        return await this.axiosInstance.get(
            this.path + endpoint + authProfileId
        );
    };
    // check if a given auth profile is completed : is associated to a user local profile into our database :
    async checkIsAuthProfileAssociated(
        authProfileId: string
    ): Promise<AxiosResponse | null> {
        try {
            const endpoint: string = "isCompleted";
            const response = await this.axiosInstance.post(this.path + endpoint, {
                id: authProfileId,
            });
            return response;
        } catch (error) {
            console.error("Error checking auth profile association:", error);
            // Handle error appropriately (e.g., reject promise)
            return null;
        }
    };

};

export default AuthFacade;