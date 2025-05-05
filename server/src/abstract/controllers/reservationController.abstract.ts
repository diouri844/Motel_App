import { Request, Response } from "express";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { DiscountService } from "../../services/discount.service";
import { ApiResponse } from "../../types/apiResponse.type";
import { Reservation } from "../../generated/prisma/client";

export abstract class ReservationControllerAbstract {
    protected readonly serviceProvider: DiscountService = new DiscountService();
    protected readonly logger: winstonLogger = logger;

    abstract createReservation(req: Request, res: Response): Promise<ApiResponse<Reservation>>;
    abstract getReservationById(req: Request, res: Response): Promise<ApiResponse<Reservation>>;
    abstract getAllReservations(req: Request, res: Response): Promise<ApiResponse<Reservation[]>>;
    abstract deleteReservation(req: Request, res: Response): Promise<ApiResponse>;
}