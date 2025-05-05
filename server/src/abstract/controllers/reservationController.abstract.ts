import { Request, Response } from "express";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { ApiResponse } from "../../types/apiResponse.type";
import { Reservation } from "../../generated/prisma/client";
import { ReservationService } from "../../services/reservation.service";

export abstract class ReservationControllerAbstract {
    protected readonly serviceProvider: ReservationService = new ReservationService();
    protected readonly logger: winstonLogger = logger;

    abstract createReservation(req: Request, res: Response): Promise<ApiResponse<Reservation>>;
    abstract getReservationById(req: Request, res: Response): Promise<ApiResponse<Reservation>>;
    abstract getAllReservations(req: Request, res: Response): Promise<ApiResponse<Reservation[]>>;
    abstract deleteReservation(req: Request, res: Response): Promise<ApiResponse>;
}