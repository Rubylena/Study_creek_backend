import express from "express";
import cors from "cors";
import connectToMongoDb from "./config/db_config.js";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

import userRoute from "./routes/user.js";

const app = express();
connectToMongoDb();
app.use(cors());
// app.use(cors({origin: ["http://localhost:3000/", "https://studycreek.netlify.app/"]}));
// app.use(cors({ origin: true }));
app.use(express.json());
app.use(helmet());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Study Creek API homepage!");
});

app.listen(PORT, () => {
  console.log(`Creek is listening on port:${PORT}`);
});
