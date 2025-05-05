import { Router } from "express";
import { ReservationControllerAbstract } from "../controllers/reservationController.abstract";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { prefixer } from "../../main";



export abstract class ReservationtRouteAbstract {
    protected router = Router();
    protected reservationController: ReservationControllerAbstract;
    protected logger: winstonLogger = logger;
    protected path = prefixer + "/reservations"

    constructor(reservationController: ReservationControllerAbstract) {
        this.reservationController = reservationController;
        this.initializeRoutes();
    }

    protected abstract initializeRoutes(): void;

    getRouter(): Router {
        return this.router;
    }
};