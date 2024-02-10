import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import validateInput from "../middlewares/validateInput";
import {
  loginInputSchema,
  registerInputSchema,
} from "../validation/validationSchema";

const authRouter = Router();

authRouter.post("/register", validateInput(registerInputSchema), registerUser);
authRouter.post("/login", validateInput(loginInputSchema), loginUser);

export default authRouter;
