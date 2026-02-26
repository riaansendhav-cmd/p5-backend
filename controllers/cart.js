import Cart from "../models/Cart.js";

export const getCartByUser = async (req, res, next) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId })
      .populate("productId")   
      .populate("userId");     

    res.json(cartItems);
  } catch (err) {
    next(err);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    res.status(201).json(await Cart.create(req.body));
  } catch (err) {
    next(err);
  }
};
