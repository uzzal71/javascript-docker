import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get(",", (req, res) => {
  res.status(200).send({ message: "nodejs app is running.." });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
