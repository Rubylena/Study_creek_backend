import users from "../models/users.js";

const getUser = (req, res) => {
  res.status(200).json({ data: req.user });
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const userId = { firebaseId: req.user.firebaseId };

    const updated = await users.findOneAndUpdate(userId, body, {
      returnDocument: "after",
    });

    res.status(200).json({ data: updated });
  } catch (err) {
    res.status(400).send(err);
  }
};
export { getUser, updateUser };
