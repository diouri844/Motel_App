import { Request, Response } from "express";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { DiscountService } from "../../services/discount.service";

export abstract class ReservationControllerAbstract {
    protected readonly serviceProvider: DiscountService = new DiscountService();
    protected readonly logger: winstonLogger = logger;

    abstract createReservation(req: Request, res: Response): Promise<void>;
    abstract getReservationById(req: Request, res: Response): Promise<void>;
    abstract getAllReservations(req: Request, res: Response): Promise<void>;
    abstract deleteReservation(req: Request, res: Response): Promise<void>;
}