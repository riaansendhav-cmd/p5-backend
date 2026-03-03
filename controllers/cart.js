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

export const updateCartItem = async (req, res, next) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const deletedItem = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Item removed from cart" });
  } catch (err) {
    next(err);
  }
};
