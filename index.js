const app = require("express")();
const PORT = 8080;
// const physician = require("./src/api/physician.json");
// const patient = require("./src/api/patient.json");
const express = require("express");

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/notable-health-tova";
const db = mongoose.connection;
const Patient = require("./src/models/patient.js");
const Physician = require("./src/models/physician.js");
const bodyParser = require("body-parser");
mongoose.connect(url, { useNewUrlParser: true });

db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/physician", (req, res) => {
  Physician.find({}).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/patient", (req, res) => {
  Patient.find({}).then((data) => {
    // console.log(data);
    res.send(data);
  });
});

app.listen(PORT, () => {
  // console.log("HELLO WORLD");
});
