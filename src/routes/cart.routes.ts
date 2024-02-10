import { Router } from "express";
import { addProductToCart, getMyCart } from "../controllers/cart.controller";

const cartRouter = Router();

cartRouter.get("/", getMyCart);
cartRouter.post("/add", addProductToCart);

export default cartRouter;
