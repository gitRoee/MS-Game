import './config/env';
import express, { Express } from "express";
import cors from 'cors';
import { corsConfig } from "./config/cors";
import { jackpotRouter } from "./routes/gameSession";
import { ENV } from "./config/env";

const app: Express = express();
const port = ENV.port || 3000;

app.use(express.json());
app.use(cors(corsConfig));
app.use('/api/jackpot', jackpotRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

