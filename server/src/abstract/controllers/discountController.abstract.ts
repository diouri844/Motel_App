import { Request, Response } from "express";
import { ApiResponse } from "../../types/apiResponse.type";
import { Discount } from "../../generated/prisma/client";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { DiscountService } from "../../services/discount.service";


export abstract class DiscountControllerAbstract {
    protected readonly serviceProvider: DiscountService = new DiscountService();
    protected readonly logger: winstonLogger = logger;

    abstract createDiscount(req: Request, res: Response): Promise<ApiResponse<Discount>>;
    abstract findDiscountById(req: Request, res: Response): Promise<ApiResponse<Discount>>;
    abstract getAllDiscounts(req: Request, res: Response): Promise<ApiResponse<Discount[]>>;
    abstract getValidDiscounts(req: Request, res: Response): Promise<ApiResponse<Discount[]>>;
    abstract checkDiscount(req: Request, res: Response): Promise<ApiResponse>;
    abstract deleteDiscount(req: Request, res: Response): Promise<ApiResponse>;
    abstract applyDiscount(req: Request, res: Response): Promise<ApiResponse<Discount>>;
}