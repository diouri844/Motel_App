import { Request, Response } from "express";
import { ApiResponse } from "../../types/apiResponse.type";
import { Guest } from "../../generated/prisma/client";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { GuestService } from "../../services/guest.service";


export abstract class GuestControllerAbstract {
    protected readonly serviceProvider: GuestService = new GuestService();
    protected readonly logger: winstonLogger = logger;
    abstract createGuest(req: Request, res: Response): Promise<ApiResponse<Guest>>;
    abstract findGuestById(req: Request, res: Response): Promise<ApiResponse<Guest>>;
    abstract getAllGuests(req: Request, res: Response): Promise<ApiResponse<Guest[]>>;
    abstract updateGuest(req: Request, res: Response): Promise<ApiResponse<Guest>>;
    abstract deleteGuest(req: Request, res: Response): Promise<ApiResponse<Guest>>;
}