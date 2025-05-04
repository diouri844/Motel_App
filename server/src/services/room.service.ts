import { RoomAbstract } from "../abstract/services/room.abstract";
import { Room } from "../generated/prisma/client";
import { CreateRoomDto } from "../types/dto/createRoom.dto";
import { Pagination } from "../types/paginate.type";





export class RoomService extends RoomAbstract {

    async createRoom(
        hotelId: string,
        roomPayload: CreateRoomDto
    ): Promise<Room | null> {

        try {
            const createdRoom: Room = await this.prismaClient.room.create({
                data: { ...roomPayload, hotelId },
            });
            return createdRoom as Room;
        } catch (error) {
            this.logger.error("Error creating room:", error);
            return null;
        };
    };

    async getRoomById(roomId: string): Promise<Room | null> {
        try {
            const targetRoom: Room | null = await this.prismaClient.room.findUnique({
                where: { id: roomId },
            });
            if (!targetRoom) return null;
            return targetRoom;
        } catch (error) {
            this.logger.error("Error fetching room by ID:", error);
            return null;
        }
    };

    async getAllRooms(
        paginate: Pagination,
        preferance?: any
    ): Promise<Room[]> {
        try {
            const skip = (paginate.page - 1) * paginate.perPage;
            const take = paginate.perPage;
            const roomList: Room[] = await this.prismaClient.room.findMany({
                where: preferance,
                include: {
                    Discount: true,
                },
                skip,
                take
            });
            return roomList as Room[];
        } catch (error) {
            this.logger.error("Error fetching all rooms:", error);
            return [];
        }
    };


}