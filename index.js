const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const monitorRoutes = require("./src/routes/monitor.routes");
app.use("/api/monitor", cors(), monitorRoutes);

const monitoringRoutes = require("./src/routes/monitoring.routes");
app.use("/api/monitoring", monitoringRoutes);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
