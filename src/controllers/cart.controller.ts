import { RequestHandler } from "express";
import cartModel from "../models/cart.model";

export const addProductToCart: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    const { productId, quantity } = req.body;
    const cartItem = await cartModel.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      await cartModel.create({ userId, productId, quantity });
    }
    res.status(201).json({ success: true, message: "Prodcut added to cart." });
  } catch (error) {
    next(error);
  }
};

export const getMyCart: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    const cartItems = await cartModel
      .find({ userId })
      .select("-userId")
      .populate("productId");
    res.status(200).json({ success: true, message: "Cart fetched", cartItems });
  } catch (error) {
    next(error);
  }
};
export const removeProductFromCart: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    const productId = req.params.id;

    const cartItem = await cartModel.findOneAndDelete({ userId, productId });
    if (!cartItem)
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found." });

    res.status(200).json({ success: true, message: "Cart item deleted" });
  } catch (error) {
    next(error);
  }
};
