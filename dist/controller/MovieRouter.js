"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Movie_1 = __importDefault(require("../model/Movie"));
const movieRouter = express_1.default.Router();
movieRouter.get("/getMovies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Getting 10 movies");
    return Movie_1.default.find()
        .limit(10)
        .then((response) => {
        res.status(200).send(response);
        console.log("Succesfully got movies");
    });
}));
movieRouter.get("/movies/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    console.log("Getting 1 movie ");
    const result = yield Movie_1.default.findOne({ _id: `${id.id}` });
    res.status(200).send(result);
    console.log(result);
}));
exports.default = movieRouter;
