import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { PrismaClient, Room } from "../../generated/prisma/client";
import { prismaClientProvider } from "../../services/prisma.service";
import { Pagination } from "../../types/paginate.type";
import { CreateHotelDto } from "../../types/dto/createHotel.dto";


export abstract class RoomAbstract {
    readonly prismaClient: PrismaClient = prismaClientProvider;
    readonly logger: winstonLogger = logger;
    // crud operations for room: 
    abstract createRoom(hotelId: string, roomPayload: CreateHotelDto): Promise<Room | null>;
    abstract getRoomById(roomId: string): Promise<Room | null>;
    abstract getAllRooms(paginate: Pagination): Promise<Room[]>;
    abstract updateRoom(roomId: string, newPayload: object): Promise<any>;
    abstract deleteRoom(roomId: string): Promise<boolean>;
    abstract getRoomListByHotelId(hotelId: string): Promise<any[]>;
    abstract checkRoomAvailability(hotelId: string, roomId: string, checkIn: Date, checkOut: Date): Promise<any>;
}

