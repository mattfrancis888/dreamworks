"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
var port = 5000;
if (process.env.NODE_ENV !== "production") {
    //We don't need dotenv when in production
    dotenv_1.default.config();
}
console.log(process.env.NODE_ENV);
app.get("/", function (req, res) {
    res.status(200).send("Hello World!");
});
app.listen(port, function () {
    console.log("App running on port " + port + ".");
});
