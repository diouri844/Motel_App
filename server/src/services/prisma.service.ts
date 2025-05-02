// let setup a global prisma provider instance :
import { PrismaClient } from "../generated/prisma/client";
import logger from '../config/logger';

export const prismaClientProvider = new PrismaClient();

export const prismaServiceProvider = {
    connect: async () => {
        await prismaClientProvider.$connect();
        logger.info("✅ Prisma Client Connected");
    },
    disconnect: async () => {
        await prismaClientProvider.$disconnect();
        logger.info("⚠️ Prisma Client Disconnected");
    },
};