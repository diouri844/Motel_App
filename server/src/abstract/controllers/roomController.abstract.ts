import { RoomService } from "../../services/room.service";
import { Request, Response } from "express";
import { Logger as winstonLogger } from "winston";
import logger from "../../config/logger";
import { ApiResponse } from "../../types/apiResponse.type";
import { Hotel, Room } from "../../generated/prisma/client";

export abstract class RoomControllerAbstract {
    protected readonly serviceProvider: RoomService = new RoomService();
    protected readonly logger: winstonLogger = logger;

    abstract createRoom(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room>>;


    abstract findRoomById(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room>>;


    abstract updateRoom(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room>>;

    abstract deleteRoom(
        req: Request,
        res: Response
    ): Promise<ApiResponse>;


    abstract getRoomList(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room[]>>;


    abstract findHotelRoomList(
        req: Request,
        res: Response
    ): Promise<ApiResponse<Room[]>>


    abstract roomAvailabilityCheck(
        req: Request,
        res: Response
    ): Promise<ApiResponse>;

}