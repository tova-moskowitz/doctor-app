const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  doctorId: Number,
  firstName: String,
  lastName: String,
  appointmentTime: String,
  appointmentKind: String,
});

module.exports = mongoose.model("Patient", PatientSchema);
