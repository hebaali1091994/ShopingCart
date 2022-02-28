 const express=require('express')
 const Order= require("../models/orderModel")
 const router=require('express').Router()


 router.post('/api/order',async(req,res)=>{
     const order=await new Order(req.body)
     const saveOrder=await order.save()
     res.send(saveOrder)
 })


 router.get('/api/order',async(req,res)=>{
     const order= await Order.find()
     res.send(order)

 })
 router.delete('/api/order/:id',async(req,res)=>{
     const delteOrder= await Order.findByIdAndDelete(req.params.id)
     res.send(delteOrder)
 })
 module.exports=router