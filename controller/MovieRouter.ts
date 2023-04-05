import express, { Request, response, Response } from "express";
import Movie from "../model/Movie";

const movieRouter = express.Router();

movieRouter.get("/getMovies", async (req: Request, res: Response) => {
  console.log("Getting 20 movies");
  return Movie.find()
    .limit(20)
    .then((response: any) => {
      res.status(200).send(response);
      console.log("Succesfully got movies");
    });
});

export default movieRouter;
