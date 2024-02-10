import { RequestHandler } from "express";
import { JWT_SECRET } from "../config";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user)
      return res
        .status(403)
        .json({ success: false, message: "User already registered !" });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Wrong username or password !" });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res
        .status(401)
        .json({ success: false, message: "Wrong username or password !" });
    const jwtPayload = { id: user._id };
    const accessToken = jwt.sign(jwtPayload, JWT_SECRET!);
    res.status(200).json({
      success: true,
      message: "User loggedin successfully",
      name: user.name,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};
