import { RequestHandler } from "express";
import userModel from "../models/user.model";

export const adminRoutes: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    if (!userId)
      return res.status(401).json({
        success: false,
        message: "Please login first then try again.",
      });

    const user = await userModel.findById(userId);

    if (user && !user.isAdmin)
      return res.status(403).json({
        success: false,
        message: "Only Admin can access this route.",
      });
    next();
  } catch (error) {
    next(error);
  }
};
