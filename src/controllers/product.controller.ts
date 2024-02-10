import { RequestHandler } from "express";
import productModel from "../models/product.model";

export const addProduct: RequestHandler = async (req, res, next) => {
  try {
    await productModel.create({ ...req.body });
    res.status(201).json({ success: true, message: "Prodcut added" });
  } catch (error) {
    next(error);
  }
};

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await productModel.find();
    res
      .status(200)
      .json({ success: true, message: "Prodcut fetched", products });
  } catch (error) {
    next(error);
  }
};
