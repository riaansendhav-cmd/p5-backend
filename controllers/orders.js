import Order from "../models/Order.js";

export const getOrders = async (req, res, next) => {
  try {
    res.json(await Order.find());
  } catch (err) {
    next(err);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    res.status(201).json(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
};
