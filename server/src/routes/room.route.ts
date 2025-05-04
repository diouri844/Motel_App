import { RoomRouteAbstract } from "../abstract/routes/roomRoute.abstract";
import { RoomController } from "../controllers/room.controller";

export class RoomRoute extends RoomRouteAbstract {


    constructor(roomController: RoomController) {
        super(roomController);
    }


    protected initializeRoutes(): void {
        this.router.post(
            this.path + "/create/:hotelId",
            this.roomController.createRoom.bind(this.roomController)
        );
        this.router.get(
            this.path + "/item/:roomId",
            this.roomController.findRoomById.bind(this.roomController)
        );
        this.router.put(
            this.path + "/item/:roomId",
            this.roomController.updateRoom.bind(this.roomController)
        );
        this.router.delete(
            this.path + "/item/:roomId",
            this.roomController.deleteRoom.bind(this.roomController)
        );
        this.router.get(
            this.path + "/list",
            this.roomController.getRoomList.bind(this.roomController)
        );
        this.router.get(
            this.path + "/hotel/:hotelId",
            this.roomController.findHotelRoomList.bind(this.roomController)
        );
        this.router.get(
            this.path + "/availability",
            this.roomController.roomAvailabilityCheck.bind(this.roomController)
        );
    }
}