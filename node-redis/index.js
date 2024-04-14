import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to node application",
  });
});

app.get("/api/v1", (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
