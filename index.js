const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const corsOptions = {
  origin: "http://localhost:3001",
  Credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
      title: "Hello Pratham!",
      body: "You have created me."
    });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.delete("/", (req, res) => {
  console.log("Mujhe kyu delete kiya?");
  res.send({});
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

