import { Guest } from "@prisma/client";

export type CreateGuestDto = Omit<Guest, "id" | "createdAt" | "updatedAt">;