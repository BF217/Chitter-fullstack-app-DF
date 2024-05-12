import mongoose from "mongoose";
import User from "./user.js";
import Peep from "./peep.js";

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = User;
db.peep = Peep;

export default db;
