import express from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validate.js";

import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be positive")
  ],
  validate,
  createProduct
);

router.put(
  "/:id",
  [
    body("name").optional().notEmpty(),
    body("price").optional().isFloat({ min: 0 })
  ],
  validate,
  updateProduct
);

router.delete("/:id", deleteProduct);

export default router;
