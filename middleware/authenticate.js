const firebaseAdmin = require("../services/service_account");
const userModel = require("../models/users");

module.exports = authenticate = async (req, res, next) => {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
      // console.log("firebase-user", firebaseUser);
      // console.log("role", firebaseUser.role);
    }

    if (!firebaseUser) {
      return res.sendStatus(401);
    }

    let user = await userModel.findOne({
      firebaseId: firebaseUser.user_id,
    });

    if (!user) {
      user = await userModel.create({
        name: firebaseUser.name,
        email: firebaseUser.email,
        firebaseId: firebaseUser.user_id,
      });
      // res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};
