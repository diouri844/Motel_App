// setup express app : 
import express from 'express';
import bodyParser from 'body-parser';
// import custom error handler middleware : 
// import errorHandler from "../microservices/common/middleware/errorHandler"
// import initRoutes from "../init/Service/init.services";
import cors from 'cors';
const app = express();

function initRoutes(app: express.Application) { }


// setup express app :
app.use(bodyParser.json());
app.use(cors());
//app.use(errorHandler);

// import the setup init service functions : 
initRoutes(app);
// setup basePermissions : 
// export the app as a default to use it in the server entry point : server.ts :
export default app;