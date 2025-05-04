import { Router } from "express";
import { RoomControllerAbstract } from "../controllers/roomController.abstract";
import logger from "../../config/logger";
import { Logger as winstonLogger } from "winston";
import { prefixer } from "../../main";

export abstract class RoomRouteAbstract {
    protected router = Router();
    protected roomController: RoomControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = prefixer + "/rooms"

    constructor(roomController: RoomControllerAbstract) {
        this.roomController = roomController;
        this.initializeRoutes();
    }


    /**
     * Define all room-related routes
     */
    protected abstract initializeRoutes(): void;

    /**
     * Expose the router instance
     */
    getRouter(): Router {
        return this.router;
    }
}