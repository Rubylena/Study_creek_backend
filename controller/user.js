import users from "../models/users.js";

const getUser = async (req, res) => {
  try {
    const userId = { firebaseId: req.user.firebaseId };

    const user = await users.findOne(userId);

    user
      ? res.status(200).json({ data: user })
      : res.status(202).json({ message: "User not found" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const userId = { firebaseId: req.user.firebaseId };

    const updatedUser = await users.findOneAndUpdate(userId, body, {
      returnDocument: "after",
    });
    updatedUser
      ? res
          .status(200)
          .json({ data: updatedUser, message: "User updated successfully." })
      : res.status(202).json({ message: "User not updated." });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const setRole = async (req, res) => {
  try {
    const role = req.body.role;

    !role && res.send(400).json({ message: "role is required." });

    const userId = { firebaseId: req.user.firebaseId };

    const updated = await users.findOneAndUpdate(userId, role, {
      returnDocument: "after",
    });

    updated
      ? res
          .status(200)
          .json({ data: updated.role, message: "Role updated successfully." })
      : res.status(202).json({ message: "User not found." });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { getUser, updateUser, setRole };
