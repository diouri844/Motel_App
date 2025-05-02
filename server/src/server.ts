import logger from "./config/logger";
import app from "./main"
import { prismaServiceProvider } from "./services/prisma.service";

const port = process.env.PORT || 3000;

app.listen(
    port,
    async () => {
        await prismaServiceProvider.connect();
        logger.info(`Server is listening on http://localhost:${port}/api/v1`);
    });

app.on("close", async () => {
    await prismaServiceProvider.disconnect();
    logger.info("Server is shutting down...");
});