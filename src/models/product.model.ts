import { Document, Schema, model } from "mongoose";

interface IBaseProduct {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface IProductSchema extends IBaseProduct, Document {}

const productSchema = new Schema<IProductSchema>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  description: { type: String },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
});

const productModel = model<IProductSchema>("product", productSchema);

export default productModel;
