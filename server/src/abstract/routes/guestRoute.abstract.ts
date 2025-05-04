import { Router } from "express";
import { GuestControllerAbstract } from "../controllers/guestController.abstract";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { prefixer } from "../../main";


export abstract class GuestRouteAbstract {
    protected router = Router();
    protected guestController: GuestControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = prefixer + "/guests"

    constructor(guestController: GuestControllerAbstract) {
        this.guestController = guestController;
        this.initializeRoutes();
    }

    protected abstract initializeRoutes(): void;

    getRouter(): Router {
        return this.router;
    }
};