import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { PrismaClient, Room } from "../../generated/prisma/client";
import { prismaClientProvider } from "../../services/prisma.service";
import { Pagination } from "../../types/paginate.type";
import { CreateHotelDto } from "../../types/dto/createHotel.dto";
import { RoomPref } from "../../types/roomPref.type";
import { UpdateRoomDto } from "../../types/dto/updateRoom.dto";
import { RoomReservation } from "../../types/roomReservation.type";


export abstract class RoomAbstract {
    readonly prismaClient: PrismaClient = prismaClientProvider;
    readonly logger: winstonLogger = logger;
    // crud operations for room: 
    abstract createRoom(hotelId: string, roomPayload: CreateHotelDto): Promise<Room | null>;
    abstract getRoomById(roomId: string): Promise<Room | null>;
    abstract getAllRooms(paginate: Pagination, preferance?: RoomPref): Promise<Room[]>;
    abstract updateRoom(roomId: string, newPayload: UpdateRoomDto): Promise<Room | null>;
    abstract deleteRoom(roomId: string): Promise<boolean>;
    abstract getRoomListByHotelId(hotelId: string, paginate: Pagination): Promise<Room[]>;
    abstract checkRoomAvailability(hotelId: string, roomId: string, checkIn: Date, checkOut: Date): Promise<RoomReservation | null>;
}

