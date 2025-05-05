import { AxiosResponse } from "axios";

type HooksReturnObject = {
    noData: boolean;
    response: AxiosResponse;
    error: string | null
};


export default HooksReturnObject;