"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://12345:54321@cluster0.585lspq.mongodb.net/sample_mflix?retryWrites=true&w=majority")
    .then((res) => {
    console.log("Connected");
})
    .catch((err) => {
    console.log(err);
});
exports.default = mongoose_1.default.connection;
