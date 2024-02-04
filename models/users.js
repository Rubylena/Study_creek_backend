import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: "string",
  },
  firebaseId: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "number",
  },
  photoUrl: {
    type: "string",
  },
  country: {
    type: "string",
  },
  role: {
    type: "string",
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("users", userSchema);
