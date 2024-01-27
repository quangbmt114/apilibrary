const express = require("express");
const cors = require("cors");
const routes = require("./src/routers/index");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.listen(8081, () => {
  console.log("listening");
});
