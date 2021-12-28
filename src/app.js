import express from "express";
import config from "./config";
import registroRoutes from './routes/registro.routes';

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(registroRoutes);

export default app;

