import express from "express";
import { body, oneOf } from "express-validator";

import middleWareConfig from "../middleware/index.js";
import signingFunctions from "../controllers/authController.js";

const authRouter = express.Router();

const { signin, signup } = signingFunctions;
const { checkDuplicateUsernameOrEmail } = middleWareConfig;

authRouter.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

authRouter.post(
  "/signup",
  [
    body("name").exists().notEmpty().escape(),
    body("username").exists().escape(),
    body("email").exists().isEmail().normalizeEmail().escape(),
    body("password").exists().escape(),
    checkDuplicateUsernameOrEmail,
  ],
  signup
);

authRouter.post(
  "/signin",
  [
    oneOf([
      body("username").exists().escape(),
      body("email").exists().isEmail().normalizeEmail().escape(),
    ]),
    body("password").exists().escape(),
  ],
  signin
);

export default authRouter;
