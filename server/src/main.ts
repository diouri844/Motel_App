// setup express app : 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morganMiddleware from './config/morganMiddleware';
const app = express();

function initRoutes(app: express.Application) { }


// setup express app :
app.use(bodyParser.json());
app.use(cors());
app.use(morganMiddleware);

// import the setup init service functions : 
initRoutes(app);

export default app;