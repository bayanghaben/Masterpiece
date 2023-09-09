const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
const campaignsRouter = require("./routes/campaignsRoutes");
const usersRouter = require("./routes/usersRoutes");
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("app route");
// });

app.use("/api/v1/admin/campaigns", campaignsRouter);
app.use("/api/v1/admin/users", usersRouter);

module.exports = app;
