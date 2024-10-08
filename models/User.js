const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "admin", "teacher"],
      default: "student",
      required: true,
    },
    LRN: { type: String, unique: true, sparse: true },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      sparse: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
