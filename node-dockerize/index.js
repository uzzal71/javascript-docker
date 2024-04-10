import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://uzzal71:uzzal123@mongo:27017/?authSource=admin")
  .then(() => console.log("successfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "nodejs app is running..",
    data: {},
  });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
