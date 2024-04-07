import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ status: 200, message: "API Development" });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
