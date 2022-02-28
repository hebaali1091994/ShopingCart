const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
},{timeseries:true});
module.exports = orderSchema;
