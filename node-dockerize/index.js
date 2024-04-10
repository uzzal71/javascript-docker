import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = config;

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Successfully connected to DB"))
    .catch((error) => {
      console.log("Connection error:", error);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

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
