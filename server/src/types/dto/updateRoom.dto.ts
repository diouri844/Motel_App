import { Room } from "../../generated/prisma/client";

export type UpdateRoomDto = Omit<Partial<Room>, "id" | "createdAt" | "updatedAt">;