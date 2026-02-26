import express from "express";
import { getCartByUser, addToCart } from "../controllers/cart.js";

const router = express.Router();

router.get("/:userId", getCartByUser);

router.post("/", addToCart);

export default router;
