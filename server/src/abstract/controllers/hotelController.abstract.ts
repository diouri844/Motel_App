import { Request, Response } from "express";
import { Logger as winstonLogger } from "winston";
import { Hotel } from "../../generated/prisma/client";
import { HotelService } from "../../services/hotel.service";
import logger from "../../config/logger";
import { ApiResponse } from "../../types/apiResponse.type";



export abstract class HotelControllerAbstract {

    protected readonly serviceProvider: HotelService = new HotelService();
    protected readonly logger: winstonLogger = logger;
    /**
     * Handle hotel creation request
     * @param req Express request (expects `name` & `location` in body)
     * @param res Express response
     */
    abstract createHotel(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Hotel>>;

    /**
     * Handle fetching a hotel by ID
     * @param req Express request (expects `hotelId` in params)
     * @param res Express response
     */
    abstract getHotelById(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Hotel>>;

    /**
     * Handle fetching all hotels with pagination
     * @param req Express request (expects `page` & `perPage` in query)
     * @param res Express response
     */
    abstract getAllHotels(
        req: Request,
        res: Response): Promise<ApiResponse>;

    /**
     * Handle updating a hotel's details
     * @param req Express request (expects `hotelId` in params and update data in body)
     * @param res Express response
     */
    abstract updateHotel(
        req: Request,
        res: Response): Promise<ApiResponse<Hotel>>;

    /**
     * Handle deleting a hotel by ID
     * @param req Express request (expects `hotelId` in params)
     * @param res Express response
     */
    abstract deleteHotel(req: Request, res: Response): Promise<ApiResponse>;
}