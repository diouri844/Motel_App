import { GuestRouteAbstract } from "../abstract/routes/guestRoute.abstract";
import { GuestController } from "../controllers/guest.controller";

export class GuestRoute extends GuestRouteAbstract {
    constructor(guestController: GuestController) {
        super(guestController);
    }

    protected initializeRoutes(): void {
        this.router.post(
            this.path + "/create",
            this.guestController.createGuest.bind(this.guestController)
        );
        this.router.get(this.path + "/item/:guestId", this.guestController.findGuestById.bind(this.guestController));
        this.router.get(this.path + "/list", this.guestController.getAllGuests.bind(this.guestController));
        this.router.put(this.path + "/item/:guestId", this.guestController.updateGuest.bind(this.guestController));
        this.router.delete(this.path + "/item/:guestId", this.guestController.deleteGuest.bind(this.guestController));
    }
}