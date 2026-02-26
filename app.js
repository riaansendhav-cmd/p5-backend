import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import cartRoutes from "./routes/cart.js";
import ordersRoutes from "./routes/orders.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", ordersRoutes);

// error handler
app.use(errorHandler);

// start server
await mongoose.connect(process.env.MONGODB_URI);
app.listen(process.env.PORT || 5000, () =>
  console.log("Server started on port 5000")
);
