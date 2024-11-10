import express, { urlencoded } from "express";
import cors from "cors"
import helmet from "helmet";
import { mainRouter } from './routers/main'

const server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

server.use(mainRouter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Servidor rodando  em http://localhost:${port}`);
});