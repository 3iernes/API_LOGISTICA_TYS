import express from "express";
const app = express();
const cors = require("cors");
const morgan = require('morgan');
//Routes
import tests from './routes/vehiclesRoutes'
//setting
let port;
app.set("port", port || process.env.APP_PORT);
app.use(express.json());
app.set('trust proxy', true); 
app.use(morgan('tiny'));
const corsOpc = {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST","PATCH"],
    credentials: true,
  }
//middlewares
app.use(cors(corsOpc));
//Routes
app.use(tests)
export default app