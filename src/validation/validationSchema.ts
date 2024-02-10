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

export const addProductInputSchema = object({
  body: object({
    title: string({ required_error: "title is required !" }),
    description: string({ required_error: "description is required !" }),
    brand: string({ required_error: "brand is required !" }),
    category: string({ required_error: "category is required !" }),
    thumbnail: string({ required_error: "thumbnail is required !" }),
    price: number({ required_error: "price is required !" }),
    stock: number({ required_error: "stock is required !" }),
  }),
});
export const addToCartInputSchema = object({
  body: object({
    productId: string({ required_error: "productId is required !" }),
    quantity: number({ required_error: "quantity is required !" }),
  }),
});
