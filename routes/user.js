import express from "express";
const userRoute = express.Router();
import authenticate from "../middleware/authenticate.js";
import { getUser, setRole, updateUser } from "../controller/user.js";

// To test if users are created and updated on mongodb
userRoute.get("/", authenticate, getUser);
userRoute.post("/", authenticate, updateUser);
userRoute.post("/role", authenticate, setRole);

export default userRoute;
