import { Hotel } from "../generated/prisma/client";

export type CreateHotelDto = Omit<Hotel, "id">;