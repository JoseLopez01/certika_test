const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const monitorRoutes = require("./src/routes/monitor.routes");

app.use('/api/monitor', monitorRoutes)

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
