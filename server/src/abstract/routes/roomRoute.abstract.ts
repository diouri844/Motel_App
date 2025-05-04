import { Router } from "express";
import { RoomControllerAbstract } from "../controllers/roomController.abstract";
import logger from "../../config/logger";
import { Logger as winstonLogger } from "winston";

export abstract class RoomRouteAbstract {
    protected router = Router();
    protected roomController: RoomControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = "/rooms"


    /**
     * Define all room-related routes
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