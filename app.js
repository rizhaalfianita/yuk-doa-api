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

// module.exports = app;

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Server up and running on http://${host}:${port}`);
});
