import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    validate: [
      {
        validator: function (v) {
          return /[A-Z]/.test(v);
        },
        message: "Password must contain at least one uppercase character",
      },
      {
        validator: function (v) {
          return /[a-z]/.test(v);
        },
        message: "Password must contain at least one lowercase character",
      },
      {
        validator: function (v) {
          return /[0-9]/.test(v);
        },
        message: "Password must contain at least one number",
      },
      {
        validator: function (v) {
          return /[!@#$%^&*]/.test(v);
        },
        message:
          "Password must contain at least one special character (!@#$%^&*)",
      },
    ],
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
