const mongoose = require("mongoose");
const orderSchema = require("../Schema/Order");
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
