import mongoose from "mongoose";

const Schema = mongoose.Schema;

const peepSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      maxLength: 280,
    },
  },
  { timestamps: true }
);

const Peep = mongoose.model("Peep", peepSchema);

export default Peep;
