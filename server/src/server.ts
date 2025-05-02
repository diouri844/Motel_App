import logger from "./config/logger";
import app from "./main"

const port = process.env.PORT || 3000;

app.listen(
    port,
    () => {
        logger.info(`Server is listening on http://localhost:${port}/api/v1`);
    });