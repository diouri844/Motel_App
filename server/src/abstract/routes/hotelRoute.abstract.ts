import { Router } from "express";
import { HotelControllerAbstract } from "../controllers/hotelController.abstract";
import logger from "../../config/logger";
import { Logger as winstonLogger } from "winston";
import { prefixer } from "../../main";

export abstract class HotelRouteAbstract {
    protected router = Router();
    protected hotelController: HotelControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = prefixer + "/hotels";

    constructor(hotelController: HotelControllerAbstract) {
        this.hotelController = hotelController;
        this.initializeRoutes();
    }

    /**
     * Define all hotel-related routes
     */
    protected abstract initializeRoutes(): void;

    /**
     * Expose the router instance
     */
    getRouter(): Router {
        this.initializeRoutes();
        return this.router;
    }
}