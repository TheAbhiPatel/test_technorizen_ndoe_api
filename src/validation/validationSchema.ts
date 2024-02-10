import { object, string, number } from "zod";

export const registerInputSchema = object({
  body: object({
    name: string({ required_error: "name is required !" }).min(3, {
      message: "name must be 3 characters long !",
    }),
    email: string({ required_error: "email is required !" }).email({
      message: "invalid email address !",
    }),
    password: string({ required_error: "password is required !" }).min(6, {
      message: "password must be 6 characters long !",
    }),
  }),
});
export const loginInputSchema = object({
  body: object({
    email: string({ required_error: "email is required !" }).email({
      message: "invalid email address !",
    }),
    password: string({ required_error: "password is required !" }),
  }),
});
