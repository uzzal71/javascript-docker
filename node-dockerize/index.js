import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";

const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = config;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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

app.enable("trust proxy");

app.get("/api/v1", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "nodejs app is running..",
    data: {},
  });
  console.log("yaah it run");
});

// localhost:3000/api/v1/posts
app.use("/api/v1/posts", postRouter);

// localhost:3000/api/v1/users
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
