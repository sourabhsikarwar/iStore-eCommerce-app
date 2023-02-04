const express = require("express");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const router = express.Router();
const dotenv = require("dotenv");
const Cart = require("../models/Cart");

dotenv.config();

// create
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save()
        res.status(201).json(savedCart)
    } catch(error){
        res.status(500).json(error)
    }
})

// get user cart
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json(error)
    }
})

// get all carts only by admin
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch(error) {
        res.status(500).json(error)
    }
})

// update cart 
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete cart
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted!")
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
