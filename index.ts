import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRouter from "./controller/MovieRouter";
import mongoose from "mongoose";
import "./config/ mongoose-config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
// app.get("/getMovies", (req: Request, res: Response) => {
//   res.send("getting movies");
// });

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
app.use(cors());
app.use(movieRouter);
