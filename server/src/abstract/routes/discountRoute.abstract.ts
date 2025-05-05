import { Router } from "express";
import { DiscountControllerAbstract } from "../controllers/discountController.abstract";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { prefixer } from "../../main";


export abstract class DiscountRouteAbstract {
    protected router = Router();
    protected discountController: DiscountControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = prefixer + "/discounts"


    constructor(discountController: DiscountControllerAbstract) {
        this.discountController = discountController;
        this.initializeRoutes();
    }

    protected abstract initializeRoutes(): void;

    getRouter(): Router {
        return this.router;
    }
}