const express = require("express");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const router = express.Router();
const dotenv = require("dotenv");
const Order = require("../models/Order");

dotenv.config();

// create order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch(error){
        res.status(500).json(error)
    }
})

// get user orders
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try{
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    } catch(error) {
        res.status(500).json(error)
    }
})

// get all orders only by admin
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch(error) {
        res.status(500).json(error)
    }
})

// update order 
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted!")
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
