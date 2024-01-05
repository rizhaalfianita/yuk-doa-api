const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/blog", (req, res) => {
//   res.send("Hello Blog!");
// });
const doaRoute = require("./routes/doa");
const userRoute = require("./routes/user");

app.use(bodyParser.json());
app.use("/doa", doaRoute);
app.use("/user", userRoute);

module.exports = app;
