const express=require('express')

const product=require('../models/productModel')
const router=express.Router()
router.get("/api/products", async (req, res) => {
    const Products = await  Product.find();
    res.send(Products);
  });
  router.post("/api/products", async (req, res) => {
    const newProducts = await new Product(req.body);
    const saveProducts = await newProducts.save();
    res.send(saveProducts);
  });
  router.delete("/api/products/:id", async (req, res) => {
    const delteProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(delteProduct);
  });
  module.exports=router