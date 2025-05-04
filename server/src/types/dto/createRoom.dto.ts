import { Room } from "../../generated/prisma/client";

export type CreateRoomDto = Omit<Room, "id" | "createdAt" | "updatedAt">;
