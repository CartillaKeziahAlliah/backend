const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    subject_name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", subjectSchema);
