import { RoomAbstract } from "../abstract/services/room.abstract";
import { Reservation, Room, RoomStatus } from "../generated/prisma/client";
import { CreateRoomDto } from "../types/dto/createRoom.dto";
import { UpdateRoomDto } from "../types/dto/updateRoom.dto";
import { Pagination } from "../types/paginate.type";
import { RoomPref } from "../types/roomPref.type";
import { RoomReservation } from "../types/roomReservation.type";




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
                include: { Discount: true }
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
        preferance?: RoomPref
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

    async updateRoom(roomId: string, newPayload: UpdateRoomDto): Promise<Room | null> {
        try {
            const updatedRoom: Room | null = await this.prismaClient.room.update({
                where: { id: roomId },
                data: newPayload,
            });
            return updatedRoom;
        } catch (error) {
            this.logger.error("Error updating room:", error);
            return null;
        }
    };

    async deleteRoom(roomId: string): Promise<boolean> {
        try {
            await this.prismaClient.room.delete({
                where: { id: roomId },
            });
            return true;
        } catch (error) {
            this.logger.error("Error deleting room:", error);
            return false;
        }
    };

    async getRoomListByHotelId(hotelId: string, paginate: Pagination): Promise<Room[]> {
        try {
            const skip = (paginate.page - 1) * paginate.perPage;
            const take = paginate.perPage;
            const roomList: any[] = await this.prismaClient.room.findMany({
                where: { hotelId },
                include: {
                    Discount: true,
                },
                skip,
                take,
            });
            return roomList;
        } catch (error) {
            this.logger.error("Error fetching room list by hotel ID:", error);
            return [] as Room[];
        }
    };

    async checkRoomAvailability(hotelId: string, roomId: string, checkIn: Date, checkOut: Date): Promise<RoomReservation | null> {
        try {
            const roomAvailability: Room | null = await this.prismaClient.room.findFirst({
                where: {
                    id: roomId,
                    hotelId,
                }
            });
            if (!roomAvailability) {
                this.logger.error("Room not found or unavailable:", roomId);
                return null;
            }
            // check if there is any reservation within the checkIn and checkOut dates
            const reservationForRoom: Reservation[] = await this.prismaClient.reservation.findMany({
                where: {
                    roomId,

                    hotelId,
                    OR: [
                        {
                            checkIn: {
                                gte: checkIn,
                                lte: checkOut,
                            }
                        },
                        {
                            checkOut: {
                                gte: checkIn,
                                lte: checkOut,
                            }
                        },
                        {
                            checkIn: {
                                lte: checkIn,
                            },
                            checkOut: {
                                gte: checkOut,
                            }
                        }
                    ]
                },
            });
            // time to check reservation response : 
            if (reservationForRoom.length > 0) {
                this.logger.info("Room is not available for the selected dates:", roomId);
                return {
                    room: roomAvailability,
                    available: false,
                    startDate: checkIn,
                    endDate: checkOut,
                };
            }

            return {
                room: roomAvailability,
                available: roomAvailability.status === RoomStatus.Available,
                startDate: checkIn,
                endDate: checkOut
            };
        } catch (error) {
            this.logger.error("Error checking room availability:", error);
            return null;
        }
    };

}