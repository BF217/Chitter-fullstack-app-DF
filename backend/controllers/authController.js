import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import db from "../models/index.js";

const User = db.user;

const signup = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ message: "Validation failed", data: errors.array() });
  }

  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    if (err.name === "ValidationError") {
      // If mongoose validation fails, send back a 422 Unprocessable Entity status with the error details
      return res.status(422).json({
        message: "Validation failed",
        errors: Object.values(err.errors).map((err) => err.message),
      });
    } else {
      return res.status(500).send({ message: err.message });
    }
  }
};

const signin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send({ message: "Validation failed", data: errors.array() });
    }

    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }], // sign in with either username or password
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid username/password combination",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400,
    });

    res.status(200).send({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

const signingFunctions = { signup, signin };

export default signingFunctions;
