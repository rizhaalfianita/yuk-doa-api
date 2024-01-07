const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const doaRoute = require("./routes/doa");
const userRoute = require("./routes/user");
const dzikrRoute = require("./routes/dzikr");
const dzikrTypeRoute = require("./routes/dzikrtype");
const doaTypeRoute = require("./routes/doatype");

app.get("/", (req, res) => {
  res.send("Yuk Doa API created by Rizha Alfianita and Fahrendra Khoirul Ihtada");
});
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/doa", doaRoute);
app.use("/dzikr", dzikrRoute);
app.use("/doaType", doaTypeRoute);
app.use("/dzikrType", dzikrTypeRoute);

module.exports = app;
