import logger from "./config/logger";
import { HotelController } from "./controllers/hotel.controller";
import app, { prefixer } from "./main"
import { HotelRoute } from "./routes/hotel.route";
import { prismaServiceProvider } from "./services/prisma.service";

const port = process.env.PORT || 3000;

app.listen(
    port,
    async () => {
        await prismaServiceProvider.connect();
        logger.info(`Server is listening on http://localhost:${port}${prefixer}`);
    });



app.on("close", async () => {
    await prismaServiceProvider.disconnect();
    logger.info("Server is shutting down...");
});