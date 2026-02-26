import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
  try {
    res.json(await User.find());
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    res.status(201).json(await User.create(req.body));
  } catch (err) {
    next(err);
  }
};
