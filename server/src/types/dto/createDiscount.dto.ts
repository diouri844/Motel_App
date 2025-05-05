import { Discount } from "../../generated/prisma/client";

export type CreateDiscountDto = Omit<Discount, "id" | "createdAt" | "updatedAt">