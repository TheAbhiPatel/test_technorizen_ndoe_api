import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controller";
import { adminRoutes } from "../middlewares/adminRoutes";
import validateInput from "../middlewares/validateInput";
import { addProductInputSchema } from "../validation/validationSchema";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post(
  "/add",
  adminRoutes,
  validateInput(addProductInputSchema),
  addProduct
);

export default productRouter;
