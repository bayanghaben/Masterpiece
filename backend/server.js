const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE;
mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database Connected");
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`app is listening in 5000`);
});
//
