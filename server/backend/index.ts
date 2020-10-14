import express from "express";
import dotenv from "dotenv";
const app = express();
const port = 5000;

if (process.env.NODE_ENV !== "production") {
    //We don't need dotenv when in production
    dotenv.config();
}
console.log(process.env.NODE_ENV);
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
