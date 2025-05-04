import { Hotel } from "../generated/prisma/client";

export type UpdateHotelDto = Omit<Hotel, "id" | "createdAt" | "updatedAt">;
