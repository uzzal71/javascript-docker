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
      sliders: {
        title: "Sliders",
        description: "Sliders description",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    },
  });
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});
