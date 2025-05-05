import { Router } from "express";
import { ReservationController } from "../controllers/reservation.controller";
import { ReservationtRouteAbstract } from "../abstract/routes/reservationRoute.abstract";

export class ReservationRoute extends ReservationtRouteAbstract {
    constructor(reservationController: ReservationController) {
        super(reservationController);
    }

    protected initializeRoutes(): void {
        this.router.post(
            this.path + "/create", this.reservationController.createReservation.bind(this.reservationController));
        this.router.get(
            this.path + "/item/:reservationId", this.reservationController.getReservationById.bind(this.reservationController));
        this.router.get(
            this.path + "/list",
            this.reservationController.getAllReservations.bind(this.reservationController));
        this.router.delete(
            this.path + "/item/:reservationId",
            this.reservationController.deleteReservation.bind(this.reservationController));
    }

    getRouter(): Router {
        return this.router;
    }
}