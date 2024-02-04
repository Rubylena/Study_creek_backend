const express = require("express");
const connectToDB = require("./config/db_config");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const userRoute = require("./routes/user");

const app = express();
connectToDB();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Study Creek API homepage!");
});

app.listen(PORT, () => {
  console.log(`Creek is listening on port:${PORT}`);
});
