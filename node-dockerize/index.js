import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "nodejs app is running..",
    data: {
      sliders: {},
    },
  });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
