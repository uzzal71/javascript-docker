import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://uzzal71:uzzal@123@172.26.0.3:27017/?authSource=admin")
  .then(() => console.log("successfully connected to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "API Development...",
  });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
