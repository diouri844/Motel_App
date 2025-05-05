import OrderFacade from "@/facade/order.facade";
import HooksReturnObject from "@/types/hooksResponse.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderData } from "@/stores/Order/order.actions";



export const retriveCustomerOrderList = (customerId: string): HooksReturnObject => {
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<AxiosResponse>({} as AxiosResponse);
    const [noData, setNoData] = useState<boolean>(false);
    const dispatch = useDispatch();
    const OrderManager = new OrderFacade();
    useEffect(
        () => {
            const fetchOrders = async () => {
                try {
                    const AipResponse: AxiosResponse = await OrderManager.retriveCustomerOrderList(customerId);
                    console.log(AipResponse);
                    setResponse(AipResponse);
                    // time to store in the local storage :
                    dispatch(
                        setOrderData(AipResponse.data.data)
                    );
                    setNoData(AipResponse.data.data.length === 0);
                } catch (error) {
                    console.log("Error fetchig inventory Vendor list :  ", error);
                    setError("An error occured while fetchin invetory vendor list .");
                }
            };
            if (customerId) {
                fetchOrders();
            }
        }, [customerId]
    );
    return { error, response, noData }
}