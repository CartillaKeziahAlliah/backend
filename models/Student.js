const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    student_name: { type: String, required: true },
    LRN: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "Student" },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
