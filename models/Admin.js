const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    admin_name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
