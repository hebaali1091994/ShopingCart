const mongoose = require("mongoose");
const productSchema = require("../Schema/Products");

const Product = mongoose.model("Product", productSchema);
module.exports=Product