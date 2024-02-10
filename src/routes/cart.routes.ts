import { Router } from "express";
import { addProductToCart, getMyCart } from "../controllers/cart.controller";
import validateInput from "../middlewares/validateInput";
import { addToCartInputSchema } from "../validation/validationSchema";

const cartRouter = Router();

cartRouter.get("/", getMyCart);
cartRouter.post("/add", validateInput(addToCartInputSchema), addProductToCart);

export default cartRouter;
