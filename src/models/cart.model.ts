import mongoose, { Document, Schema, model } from "mongoose";

interface IBaseCart {
  userId: string;
  productId: Schema.Types.ObjectId;
  quantity: number;
}

interface ICartSchema extends IBaseCart, Document {}

const cartSchema = new Schema<ICartSchema>({
  userId: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true, ref: "product" },
  quantity: { type: Number, default: 1 },
});

const cartModel = model<ICartSchema>("cart", cartSchema);

export default cartModel;
