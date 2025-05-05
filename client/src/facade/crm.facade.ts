// setup my first facad model class :
import { useAxios } from "@/context/axios.context";
import { AxiosResponse } from "axios";
import BaseFacade from "@/facade/base.facade";




class CRMFacade implements BaseFacade {
    path = "/auth/";
    axiosInstance = useAxios();

    async pingCRmService(enpoint: string): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.axiosInstance.get(
            this.path + enpoint
        );
        return response;
    };
}


export default CRMFacade;