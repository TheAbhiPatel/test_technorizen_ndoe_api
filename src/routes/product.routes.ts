import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controller";
import { adminRoutes } from "../middlewares/adminRoutes";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/add", adminRoutes, addProduct);

export default productRouter;
