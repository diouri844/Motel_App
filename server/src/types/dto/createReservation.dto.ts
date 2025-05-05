import { Reservation } from "../../generated/prisma/client";

export type CreateReservationDto = Omit<Reservation | "id", "createdAt" | "updatedAt">;