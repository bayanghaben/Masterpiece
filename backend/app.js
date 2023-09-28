const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

const campaignsRouter = require("./routes/campaignsRoutes");
const usersRouter = require("./routes/usersRoutes");
const adminRouter = require("./routes/adminRoutes");
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("app route");
// });

app.use("/api/v1/admin/campaigns", campaignsRouter);
app.use("/api/v1/admin/users", usersRouter);
app.use("/api/v1/admin/login", adminRouter);

module.exports = app;
