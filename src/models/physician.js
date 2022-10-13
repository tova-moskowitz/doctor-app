const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhysicianSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

module.exports = mongoose.model("Physician", PhysicianSchema);
