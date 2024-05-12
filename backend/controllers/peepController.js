import db from "../models/index.js";
import { validationResult } from "express-validator";

const Peep = db.peep;

const getAllPeeps = async (req, res) => {
  try {
    const peeps = await Peep.find()
      .populate("author", "name username") // This line populates the author field with the corresponding User document
      .sort({ createdAt: -1 }); // This line sorts the peeps in reverse chronological order
    res.status(200).json(peeps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPeepById = async (req, res) => {
  try {
    const peep = await Peep.findById(req.params.id).populate(
      "author",
      "name username"
    );
    if (!peep) {
      return res.status(404).send({ message: "Peep not found" });
    }
    res.status(200).json(peep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postPeep = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .send({ message: "Validation failed", data: errors.array() });
  }

  if (req.userId !== req.body.author) {
    return res.status(403).send({
      message: "You are not authorized to create a peep for another user",
    });
  }

  const peep = new Peep({
    author: req.body.author,
    content: req.body.content,
  });

  try {
    await peep.save();
    res.send({ message: "Peep was sent successfully!" });
  } catch (err) {
    if (err.name === "ValidationError") {
      // If mongoose validation fails, send back a 422 Unprocessable Entity status with the error details
      return res.status(422).json({
        message: "Peep failed validation",
        errors: Object.values(err.errors).map((err) => err.message),
      });
    } else {
      return res.status(500).send({ message: err.message });
    }
  }
};

const peepFunctions = { getAllPeeps, getPeepById, postPeep };

export default peepFunctions;
