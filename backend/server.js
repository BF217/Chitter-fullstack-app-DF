import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";

import db from "./models/index.js";
import authRouter from "./routes/authRoutes.js";
import peepRouter from "./routes/peepRoutes.js";

config({ path: `.env.${process.env.NODE_ENV}` });

db.mongoose
  .connect(`${process.env.DB_URI}:${process.env.DB_PORT}/${process.env.DB}`)
  .then(() => {
    console.log(`Successfully connected to MongoDB`);
  })
  .catch((err) => {
    console.error(`Connection error`, err);
    process.exit();
  });

const app = express();

// hide logs during testing
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("tiny"));
}

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);
app.use("/peeps", peepRouter);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);

export default server;
