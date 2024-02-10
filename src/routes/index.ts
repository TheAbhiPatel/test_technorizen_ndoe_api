import { Router } from "express";
import authRouter from "./auth.routes";
import productRouter from "./product.routes";
import cartRouter from "./cart.routes";
import { privateRoutes } from "../middlewares/privateRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/cart", privateRoutes, cartRouter);

export default router;
