import express from "express";
import {
  getCartByUser,
  addToCart,
  updateCartItem,
  deleteCartItem
} from "../controllers/cart.js";

const router = express.Router();

router.get("/:userId", getCartByUser);
router.post("/", addToCart);
router.put("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);

export default router;
