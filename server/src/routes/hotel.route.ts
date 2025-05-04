import { Router } from "express";
import { HotelRouteAbstract } from "../abstract/routes/hotelRoute.abstract";
import { HotelController } from "../controllers/hotel.controller";
import { HotelControllerAbstract } from "../abstract/controllers/hotelController.abstract";

export class HotelRoute extends HotelRouteAbstract {
    constructor(hotelController: HotelController) {
        super(hotelController);
    };


    protected initializeRoutes(): void {
        this.logger.info("Initializing hotel routes");
        this.router.post(
            this.path + "/create",
            this.hotelController.createHotel.bind(this.hotelController)
        );
        this.router.get(
            this.path + "/item/:hotelId",
            this.hotelController.getHotelById.bind(this.hotelController)
        );
        this.router.get(
            this.path + "/list",
            this.hotelController.getAllHotels.bind(this.hotelController)
        );
        this.router.put(
            this.path + "/item/:hotelId",
            this.hotelController.updateHotel.bind(this.hotelController)
        );
        this.router.delete(
            this.path + "/item/:hotelId",
            this.hotelController.deleteHotel.bind(this.hotelController)
        );
    }

    getRouter(): Router {
        this.logger.info("Getting hotel routes");
        this.initializeRoutes();
        return this.router;
    }
}