const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const doaRoute = require("./routes/doa");
const userRoute = require("./routes/user");

app.get("/", (req, res) => {
  res.send("Yuk Doa API created by Rizha Alfianita and Fahrendra Khoirul Ihtada");
});
app.use(bodyParser.json());
app.use("/doa", doaRoute);
app.use("/user", userRoute);

module.exports = app;
