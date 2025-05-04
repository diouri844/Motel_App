// setup express app : 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morganMiddleware from './config/morganMiddleware';
import { HotelRoute } from './routes/hotel.route';
import { HotelController } from './controllers/hotel.controller';
import { RoomRoute } from './routes/room.route';
import { RoomController } from './controllers/room.controller';
const app = express();
export const prefixer = "/api/v1";
function initRoutes(app: express.Application): void {
    // Initialize controllers and routes
    const hotelRoute = new HotelRoute(new HotelController);
    const roomRoute = new RoomRoute(new RoomController);

    // Use the routes
    app.use("/", hotelRoute.getRouter());
    app.use("/", roomRoute.getRouter());
}

// setup express app :
app.use(bodyParser.json());
app.use(cors());
app.use(morganMiddleware);

// import the setup init service functions : 
initRoutes(app);

export default app;