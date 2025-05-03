import { Response } from 'express';


export enum ResponseStatus {
    SUCCESS = "success",
    ERROR = "error",
    NOT_FOUND = "not_found",
    UNAUTHORIZED = "unauthorized",
    FORBIDDEN = "forbidden",
    BAD_REQUEST = "bad_request",
    INTERNAL_SERVER_ERROR = "internal_server_error"
};

export type ResponsePayload<T = null> = {
    status: ResponseStatus;
    message: string;
    data?: T;
    error?: string;
}

export type ApiResponse<T = null> = Response<ResponsePayload<T>>;