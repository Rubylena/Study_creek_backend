import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: "string",
    trim: true,
  },
  firebaseId: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: "number",
    trim: true,
  },
  photoUrl: {
    type: "string",
  },
  country: {
    type: "string",
    trim: true,
  },
  role: {
    type: "string",
    trim: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("users", userSchema);
