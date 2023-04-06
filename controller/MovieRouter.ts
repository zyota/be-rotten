import express, { Request, response, Response } from "express";
import Movie from "../model/Movie";

const movieRouter = express.Router();

movieRouter.get("/getMovies", async (req: Request, res: Response) => {
  console.log("Getting 10 movies");
  return Movie.find()
    .limit(10)
    .then((response: any) => {
      res.status(200).send(response);
      console.log("Succesfully got movies");
    });
});
movieRouter.get("/movies/:id", async (req: Request, res: Response) => {
  const id = req.params;
  console.log("Getting 1 movie ");

  const result = await Movie.findOne({ _id: `${id.id}` });
  res.status(200).send(result);
  console.log(result);
});

export default movieRouter;
