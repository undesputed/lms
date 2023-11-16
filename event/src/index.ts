const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/event", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:");
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening to Port 4005");
});
