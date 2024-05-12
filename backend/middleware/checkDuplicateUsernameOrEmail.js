import db from "../models/index.js";

const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    //username
    const userByUsername = await User.findOne({
      username: req.body.username,
    });

    if (userByUsername) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // email
    const userByEmail = await User.findOne({
      email: req.body.email,
    });

    if (userByEmail) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

export default checkDuplicateUsernameOrEmail;
