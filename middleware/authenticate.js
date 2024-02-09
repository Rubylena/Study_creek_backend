import auth from "../services/service_account.js";
import userModel from "../models/users.js";

const authenticate = async (req, res, next) => {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      return res.sendStatus(401);
    }

    let user = await userModel.findOne({
      firebaseId: firebaseUser.user_id,
    });

    if (!user && user.email !== firebaseUser.email) {
      user = await userModel.create({
        name: firebaseUser.name,
        email: firebaseUser.email,
        firebaseId: firebaseUser.user_id,
        photoUrl: firebaseUser.picture,
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error?.errorInfo?.message });
  }
};

export default authenticate;
