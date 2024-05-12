import express from "express";
import { body } from "express-validator";

import middlewareConfig from "../middleware/index.js";
import peepFunctions from "../controllers/peepController.js";

const peepRouter = express.Router();

const { verifyToken } = middlewareConfig;
const { getAllPeeps, getPeepById, postPeep } = peepFunctions;

peepRouter.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

peepRouter.get("/", getAllPeeps);

peepRouter.get("/:id", getPeepById);

peepRouter.post(
  "/add",
  [body("author").exists().escape(), body("content").exists().escape()],
  verifyToken,
  postPeep
);

export default peepRouter;
