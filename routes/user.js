const express = require("express");
const authenticate = require("../middleware/authenticate");
const userRoute = express.Router();
const { getUser } = require("../controller/user");

// To test if users are created on mongodb
userRoute.get("/", authenticate, getUser);

module.exports = userRoute;
