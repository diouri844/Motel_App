import { Room } from "../generated/prisma/client"

export type RoomReservation = {
    room: Room,
    available: boolean,
    startDate: Date,
    endDate: Date,
};