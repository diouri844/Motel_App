import { Guest } from "../../generated/prisma/client";

export type CreateDiscountDto = Omit<Guest, "id" | "createdAt" | "updatedAt">